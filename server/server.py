# imports
from flask import Flask
from flask import request
import pandas as pd
# tsa imports 
import twitter_api as tapi
import pre_processing as pre
import tokenizer as tknz
import tsa_brain as brain
import graph_gen as ggen

app = Flask(__name__)

# local store (temp)
senti_export, sarc_export = {}
input_query = ''

# http requests handling
@app.route('/')
def test():
    return('welcome to tsa!')

@app.route('/search', methods = ['POST'])
def search():
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
        
        # graphs
        ggen.generate_graphs(senti_export, sarc_export, tweets_processed, user_input)
    return('200: OK')

@app.route('/searchresults', methods = ['GET'])
def search_results():
    if request.method == 'GET':
        df_tweets = pd.read_csv('./exports/tweepy_output/results.csv')
        tweets_arr = []
        for item in df_tweets['Tweet']:
            tweets_arr.append(item)
        # export_data = [senti_export, sarc_export, input_query]
    return senti_export, sarc_export, tweets_arr, input_query

# exec server
if (__name__) ==  '__main__':
    app.run(debug=True)