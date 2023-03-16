# imports
from flask import Flask
from flask import request
import pandas as pd
import json
import pymongo
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson import json_util
# tsa imports 
import twitter_api as tapi
import pre_processing as pre
import tokenizer as tknz
import tsa_brain as brain
import graph_gen as ggen

app = Flask(__name__)

client = MongoClient("mongodb+srv://201847:Brunel@clustertsa.rscxwmj.mongodb.net/?retryWrites=true&w=majority", server_api=ServerApi('1'))
db = client.tsa_db
clt = db.tsa_collection

# http requests handling
@app.route('/')
def test():
    return('welcome to tsa!')

@app.route('/search', methods = ['POST', 'GET'])
def search():
    output = {}
    if request.method == 'POST':
        user_input = request.get_data(as_text=True)
        input_query = user_input
        print(user_input, type(user_input))
        #tapi.exec_tapi(data) # send search parameter to twitter api  (TURNED OFF FOR TESTING)
        tweets_processed = pre.preprocess('./exports/tweepy_output/results.csv')
        tweet_vect = tknz.senti_tokenizer(tweets_processed)
        tweet_vect2 = tknz.sarc_tokenizer(tweets_processed)
        senti_results = brain.predict_senti(tweet_vect)
        sarc_results = brain.predict_sarc(tweet_vect2)
        
        # exports
        senti_export = brain.convert_setiments(senti_results)
        sarc_export = brain.convert_sarc(sarc_results)
        
        output = {
            'input': input_query, 
            'senti': [int(senti_export['pos']), int(senti_export['neg'])],
            'sarc': [sarc_export['sarc'], sarc_export['not_sarc']],
            'tweets': tweets_processed
        }
        
        # create in mongodb
        clt.insert_one(output)

        return (f'200: OK | Request recieved: {user_input}')
   
@app.route('/search/recent', methods = ['GET'])  
def get_recent():
    if request.method == 'GET':
        data_export = dict(clt.find_one(
            {},
            sort=[('_id', pymongo.DESCENDING)]
        ))
        return json.loads(json_util.dumps(data_export))

# exec server
if (__name__) ==  '__main__':
    app.run(debug=True)