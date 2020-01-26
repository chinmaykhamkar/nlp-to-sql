from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods = ['POST'])

def postJsonHandler():
    print (request.is_json)
    content = request.get_json()
    print (content)
    return content

if __name__ == '__main__':
    app.run(debug = True)