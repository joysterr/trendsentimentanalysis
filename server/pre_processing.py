# imports
import pandas as pd
import numpy as np
import re
import html
import string

# import output file
df_tweets = pd.read_csv('./exports/tweepy_output/results.csv')
tweets_arr = []
for item in df_tweets['Tweet']:
    tweets_arr.append(item)

tweets_clean = []
def preprocess(arr):
    for item in arr:
        item = item.lower()
        item = item.replace('rt', '')
        item = re.sub(r'http\S+', '', item)
        item = re.sub('@[^\s]+', '', item)
        item = "".join([char for char in item if char not in string.punctuation])
        item = re.sub('[0-9]+', '', item)
        tweets_clean.append(item)
        
preprocess(tweets_arr)

for item in tweets_clean:
    print(f'{item}\n')