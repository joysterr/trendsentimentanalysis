# imports
import pickle
import re

# delete emoji
def delete_emoji(sentence):
  emoji_pattern = re.compile(
      "["
      u"\U0001F600-\U0001F64F"
      u"\U0001F300-\U0001F5FF"
      u"\U0001F680-\U0001F6FF"
      u"\U0001F1E0-\U0001F1FF"
      u"\U00002702-\U000027B0"
      u"\U000024C2-\U0001F251"
      "]+", flags=re.UNICODE
  )
  return emoji_pattern.sub(r'', sentence)

# replace emoji with relevant word
def emoji_to_word(sentence):
    with open('/util/Emoji_Dict.p', 'rb') as f:
        emoji_bank = pickle.load(f)
    emoji_bank = {v: k for k, v in emoji_bank.items()}


    for emot in emoji_bank:
        sentence = re.sub(r'('+emot+')', "_".join(emoji_bank[emot].replace(",","").replace(":","").split()), sentence)
    return sentence

# delete emoticons :)
def delete_emoticons(sentence):
    with open('/util/Emoticon_Dict.p', 'rb') as f:
        emoticon_bank = pickle.load(f)

    emoticon_pattern = re.compile(u'(' + u'|'.join(k for k in emoticon_bank) + u')')
    return emoticon_pattern.sub(r'', sentence)