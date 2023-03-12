# imports
from flask import Flask
from flask import request
# tsa imports 
import twitter_api as tapi
import pre_processing as pre
import tokenizer as tknz
import tsa_brain as brain
import graph_gen as ggen

app = Flask(__name__)

# http requests handling
@app.route('/')
def test():
    return('welcome to tsa!')

@app.route('/search', methods = ['POST'])
def search():
    if request.method == 'POST':
        data = request.get_data(as_text=True)
        print(data, type(data))
        tapi.exec_tapi(data) # send search parameter to twutter api 
        tweets_processed = pre.preprocess('./exports/tweepy_output/results.csv')
        tweet_vect = tknz.senti_tokenizer(tweets_processed)
        tweet_vect2 = tknz.sarc_tokenizer(tweets_processed)
        senti_results = brain.predict_senti(tweet_vect)
        sarc_results = brain.predict_sarc(tweet_vect2)
        ggen.generate_graphs(brain.convert_setiments(senti_results), brain.convert_sarc(sarc_results), tweets_processed, data)
    return('200: OK')


# exec server
if (__name__) ==  '__main__':
    app.run(debug=True)