import numpy as np
import pandas as pd
import matplotlib
matplotlib.use("TkAgg")
import matplotlib.pyplot as plt

def generate_graphs(data, data2, tweets_raw, user_search):
    create_bar(data, user_search)
    create_wordcloud(tweets_raw, user_search)
    create_pie(data, user_search)
    create_sarc_pie(data2, user_search) # sarcasm pie chart
    
# generate a barchart   
def create_bar(data, user_search):
    sents = ['positive', 'negative']
    pos = data['pos']
    neg =data['neg']
    scores = [pos,neg]
    # fig = plt.figure()
    # bar = fig.add_axes([0,0,1,1])
    # bar.bar(sents, scores, color=colors)
    colors = ['green', 'red']
    plt.bar(sents, scores, color=colors)
    plt.title(f'{user_search} results')
    plt.xlabel('sentiments')
    plt.ylabel('score')
    #plt.show()
    plt.savefig('./exports/plots/senti_bar.png')
  
# generate a pie chart
def create_pie(data, user_search):
    pie_labels = ['positive', 'negative']
    pos = data['pos']
    neg = data['neg']
    scores = [pos, neg]
    # pie = plt.pie(scores, labels=pie_labels)
    plt.title(f'{user_search} results')
    pie = plt.pie(scores, labels=pie_labels)
    #plt.show()
    plt.savefig('./exports/plots/senti_pie.png')
    

# generate a wordcloud
def create_wordcloud(tweets_raw, user_search):
    # prep data:
    combi_string = ''

    for item in tweets_raw:
        item = str(item)
        tokens = item.split()

    for i in range(len(tokens)):
        tokens[i] = tokens[i].lower()

    combi_string += " ".join(tokens) + " "

    # generate wordcloud
    from wordcloud import WordCloud, STOPWORDS

    stopwords = set(STOPWORDS)

    wordcloud = WordCloud(
        width = 1000,
        height = 1000,
        background_color = 'white',
        stopwords = stopwords,
        min_font_size = 10
    ).generate(combi_string)

    plt.figure(figsize = (8, 8), facecolor = None)
    plt.imshow(wordcloud)
    plt.axis('off')
    plt.tight_layout(pad = 0)
    plt.title(f'wordcloud for the query: {user_search}')
    #plt.show()
    plt.savefig('./exports/plots/wordcloud.png')


# generate sarc pie plot
def create_sarc_pie(data2, user_search):
    pie_labels = ['sarcastic', 'not_sarcastic']
    pos = data2['sarc']
    neg = data2['not_sarc']
    scores = [pos, neg]
    pie = plt.pie(scores, labels=pie_labels)
    plt.title(f'{user_search} sarcasm results')
    #plt.show()
    plt.savefig('./exports/plots/sarc_pie.png')