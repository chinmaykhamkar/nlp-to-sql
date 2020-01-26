from flask import Flask, request, jsonify
from flask_cors import CORS
import os


app = Flask(__name__)
cors = CORS(app)

@app.route('/', methods = ['POST'])

def postJsonHandler():
    content = request.get_json()
    q = content['sentence']
    print(q)
    query_sql = "python3 -m ln2sql.main -d database_store/city.sql -l lang_store/english.csv -j output.json -i " + '"' + q + '"'
    os.system(query_sql)
    f = open('query.txt','r')
    ans = f.read()
    f.close()
    ans = ans.replace('\n',' ')
    d = {
        "query":ans
    }
    res = jsonify(d)
    return res

if __name__ == '__main__':
    app.run(debug = True)