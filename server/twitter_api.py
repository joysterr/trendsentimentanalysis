import pandas as pd
import configparser
import tweepy

#import from server
user_search = ''

#auth twitter api v1/1.1
cfg = configparser.ConfigParser()
cfg.read('config.ini')

api_key = cfg['twitter_api']['api_key']
api_key_secret = cfg['twitter_api']['api_key_secret']
bearer_tok = cfg['twitter_api']['bearer_tok']
access_tok = cfg['twitter_api']['access_tok']
access_tok_secret = cfg['twitter_api']['access_tok_secret']

auth = tweepy.OAuthHandler(api_key, api_key_secret)
auth.set_access_token(access_tok, access_tok_secret)

api = tweepy.API(auth)

#twitter api v2 auth & call
api_v2 = tweepy.Client(
    consumer_key = api_key,
    consumer_secret = api_key_secret,
    bearer_token = bearer_tok,
    access_token = access_tok,
    access_token_secret = access_tok_secret
)

#method 1
recent_tweets = api_v2.search_recent_tweets(
    "nasa", 
    max_results = 10, 
    #extra params
    media_fields = None,
    place_fields = None,
    poll_fields = None,
    user_auth = True
)

col = ['Time', 'User', 'Tweet']
tweet_data = []

for tweet in recent_tweets.data:
    tweet_data.append([tweet.tweet_fields.created_at, tweet.user_fields.author_id, tweet.text])

df_tweet_data = pd.DataFrame(tweet_data, columns=col)

print(df_tweet_data)

df_tweet_data.to_csv('results.csv')
df_tweet_data.to_json('results.json')