from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route('/', methods = ['POST'])

def postJsonHandler():
    print (request.is_json)
    content = request.get_json()
    print (content)
    return content

if __name__ == '__main__':
    app.run(debug = True)