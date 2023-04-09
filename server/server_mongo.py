# imports
from flask import Flask
from flask import request, make_response
import pandas as pd
import json
import pymongo
import certifi
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson import json_util
# tsa imports 
import twitter_api as tapi
import pre_processing as pre
import tokenizer as tknz
import tsa_brain as brain

app = Flask(__name__)

# mongodb connection
client = MongoClient("mongodb+srv://201847:Brunel@clustertsa.rscxwmj.mongodb.net/?retryWrites=true&w=majority", server_api=ServerApi('1'), tlsCAFile=certifi.where())
db = client.tsa_db

# collections
clt = db.tsa_collection #tsa data store
clt_us = db.tsa_user_support #user support store
clt_uf = db.tsa_user_feedback #user feedback store

# http requests handling
@app.route('/')
def test():
    return('welcome to tsa!')

@app.route('/searches', methods = ['POST', 'GET'])
def search():
    output = {}
    if request.method == 'POST':
        user_input = request.get_data(as_text=True)
        input_query = user_input
        print(user_input, type(user_input))
        tapi.exec_tapi(input_query) # send search parameter to twitter api  (TURN OFF FOR TESTING)
        tweets_processed = pre.preprocess('./exports/tweepy_output/results.csv')
        print(tweets_processed)
        tweet_vect = tknz.senti_tokenizer(tweets_processed)
        tweet_vect2 = tknz.sarc_tokenizer(tweets_processed)
        
        senti_results = brain.predict_senti(tweet_vect)
        sarc_results = brain.predict_sarc(tweet_vect2)
        print(senti_results)
        # exports
        senti_export = brain.convert_setiments(senti_results)
        print(senti_export)
        sarc_export = brain.convert_sarc(sarc_results)
        
        output = {
            'input': input_query, 
            'senti': [int(senti_export['pos']), int(senti_export['neg'])],
            'sarc': [sarc_export['sarc'], sarc_export['not_sarc']],
            'tweets': tweets_processed
        }
        
        # save in mongodb
        clt.insert_one(output)
        
        og_tweets = pd.read_csv('./exports/tweepy_output/results.csv')
        senti_output = []
        sarc_output = []
        
        for item in senti_results:
            if item > 0.5:
                senti_output.append('positive')
            else:
                senti_output.append('negative')
                
        for item in sarc_results:
            if item > 0.5:
                sarc_output.append('sarc')
            else:
                sarc_output.append('not_sarc')
        
        all_data = {
            'input': input_query,
            'tweets': og_tweets['Tweet'],
            'sentiment': senti_output,
            'sarcasm': sarc_output
        }
        col = ['input', 'tweets','sentiment','sarcasm']
        df_data = pd.DataFrame(all_data, columns=col)
        df_data.to_csv('temp/tsa_grand_results.csv')
        
        return (f'200: OK | Request recieved: {user_input}')
    
    if request.method == 'GET':
        data_export = dict(clt.find({}))
        return json.loads(json_util.dumps(data_export))
   
@app.route('/searches/recent', methods = ['GET'])  
def get_recent():
    if request.method == 'GET':
        data_export = dict(clt.find_one(
            {},
            sort=[('_id', pymongo.DESCENDING)]
        ))
        return json.loads(json_util.dumps(data_export))

@app.route('/supportreqs', methods = ['GET', 'POST'])
def user_support():
    if request.method == 'POST':

        support_query = request.get_json(force=True)
        print(support_query, type(support_query))
        
        clt_us.insert_one(support_query)
        
        return ('feedback saved')
    elif request.method == 'GET':
        data_export = dict(clt_us.find())
        return json.loads(json_util.dumps(data_export))

@app.route('/feedbacks', methods = ['GET', 'POST'])
def user_feedback():
    if request.method == 'POST':

        feedback_query = request.get_json(force=True)
        print(feedback_query, type(feedback_query))
        
        clt_uf.insert_one(feedback_query)
        
        return ('feedback saved')
    elif request.method == 'GET':
        data_export = dict(clt_uf.find())
        return json.loads(json_util.dumps(data_export))

@app.route('/feedbacks/senti', methods = ['GET'])
def analyse_feedback():
    if request.method == 'GET':
        data_import = clt_uf.find()
        data_raw = json.loads(json_util.dumps(data_import))
        print(data_raw)
        key = 0
        data_arr = []
        for items in data_raw:
            data_arr.append(data_raw[key]['feedback'])
            key += 1
        print(data_arr, type(data_arr))
        # clean_data = pre.preprocess(data_arr)
        data_tok = tknz.senti_tokenizer(data_arr)
        senti_out = brain.predict_senti(data_tok)
        senti_conv = brain.convert_setiments(senti_out)
        print(senti_conv['pos'])
        resp = [senti_conv['pos'], senti_conv['neg']]
        return resp


@app.route('/downloadcsv', methods = ['GET'])
def download_csv():
    with open('temp/tsa_grand_results.csv', 'r') as f:
        csv_data = f.read()
    return csv_data

@app.route('/tsatests', methods = ['POST'])
def test_tsa():
    test_input = [request.get_data(as_text=True)]
    # input_processed = pre.preprocess(test_input)
    input_vect_pad = tknz.senti_tokenizer(test_input)
    model_out = brain.predict_senti(input_vect_pad)
    
    if model_out > 0.5:
        test_result = 'Positive 👍'
    else:
        test_result = 'Negative 👎'
    return test_result
    
# exec server
if (__name__) ==  '__main__':
    app.run(debug=True)