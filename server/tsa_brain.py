import tensorflow as tf

#load model
senti_model = tf.keras.models.load_model('./models/senti_model1.h5')
sarc_model = tf.keras.models.load_model('./models/sarc_model2.h5')

#sentiment analysis 
def predict_senti(input):
    senti_model_output = senti_model.predict(input)
    return senti_model_output
    
    
def convert_setiments(model_output):
    senti_dict = {'pos': 0, 'neg': 0}
    for val in model_output:
        if val >= 0.6:
            senti_dict['pos'] += 1
        else:
            senti_dict['neg'] += 1
    return senti_dict


#sarcasm detection 
def predict_sarc(input):
    sarc_model_output = sarc_model.predict(input)
    return sarc_model_output
    
def convert_sarc(model_output):
    sarc_dict = {'sarc': 0, 'not_sarc': 0}
    for val in model_output:
        if val >= 0.5:
            sarc_dict['sarc'] += 1
        else:
            sarc_dict['not_sarc'] += 1
    return sarc_dict