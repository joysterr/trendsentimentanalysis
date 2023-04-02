import tensorflow
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pickle

# vectorizing and padding for sarc input
def sarc_tokenizer(input):
    with open('./util/tokenzier.pickle', 'rb') as handle:
        tokenizer = pickle.load(handle)

    seq = tokenizer.texts_to_sequences(input)
    pad = pad_sequences(seq, maxlen=150, padding='pre', truncating='pre')
    return pad

# vectorizing and padding for sentiment input
def senti_tokenizer(input):
    with open('./models/airline_senti_tokenzier2.pickle', 'rb') as handle:
        senti_tokenizer = pickle.load(handle)

    seq = senti_tokenizer.texts_to_sequences(input)
    pad = pad_sequences(seq, maxlen=50, padding='pre', truncating='pre') #change maxlen based on model/tokenizer
    #pad = pad_sequences(seq, maxlen=50, padding='post', truncating='post') #change maxlen based on model/tokenizer
    return pad