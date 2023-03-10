# imports
from flask import Flask
from flask import request
import twitter_api as tapi

app = Flask(__name__)

# http request hadling
@app.route('/')
def test():
    return('welcome to tsa!')

@app.route('/search', methods = ['POST'])
def search():
    if request.method == 'POST':
        data = request.get_data(as_text=True)
        print(data, type(data))
        tapi.exe_tapi(data)
    return('200: OK')


# app start
if (__name__) ==  '__main__':
    app.run(debug=True)