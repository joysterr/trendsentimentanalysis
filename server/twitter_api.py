# refactoring needed !
def exe_tapi(input_search):
    import pandas as pd
    import configparser
    import tweepy

    #import from server
    user_search = input_search #user query goes here

    #auth twitter api v1/1.1
    cfg = configparser.ConfigParser()
    cfg.read('config.ini')

    api_key = cfg['twitter_api']['api_key']
    api_key_secret = cfg['twitter_api']['api_key_secret']
    bearer_tok = cfg['twitter_api']['bearer_tok']
    access_tok = cfg['twitter_api']['access_tok']
    access_tok_secret = cfg['twitter_api']['access_tok_secret']

    #api v1.1 authorisation
    auth = tweepy.OAuthHandler(api_key, api_key_secret)
    auth.set_access_token(access_tok, access_tok_secret)

    api = tweepy.API(auth)

    recent_tweets = api.search_tweets(user_search, lang='en', result_type='mixed', count=5, include_entities=False)

    col = ['Time', 'Tweet']
    tweet_data = []

    for tweet in recent_tweets:
        tweet_data.append([tweet.created_at, tweet.text])

    df_tweet_data = pd.DataFrame(tweet_data, columns=col)

    print(df_tweet_data)

    #export data/results
    df_tweet_data.to_csv('tweets_export/results.csv')
    df_tweet_data.to_json('tweets_export/results.json')