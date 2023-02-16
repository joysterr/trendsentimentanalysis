#imports
from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/')
def test():
    return('welcome to tsa!')

@app.route('/search', methods = ['POST'])
def search():
    if request.method == 'POST':
        data = request.form
    return('200: OK')

if (__name__) ==  '__main__':
    app.run(debug=True)