from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route('/', methods = ['POST'])

def postJsonHandler():
    content = request.get_json()
    print (content['data'])
    print(type(content))
    return content

if __name__ == '__main__':
    app.run(debug = True)