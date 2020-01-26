from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import subprocess
# from flask_mysqldb import MySQL

app = Flask(__name__)
cors = CORS(app)
# app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] = 'passs@123'
# app.config['MYSQL_DB'] = 'enigma'
# mysql = MySQL(app)


@app.route('/', methods = ['POST'])

def postJsonHandler():
    content = request.get_json()
    q = content['sentence']
    query_sql = "python -m ln2sql.main -d database_store/student.sql -t thesaurus_store/th_english.dat -l lang_store/english.csv -j output.json -i " + '"' + q + '"'
    os.system(query_sql)
    f = open('query.txt','r')
    ans = f.read()
    f.close()

    ans = ans.replace('\n',' ')
    # cur = mysql.connection.cursor()
    # cur.execute(ans)
    # rows = cursor.fetchall()
    # print(rows)
    d = {
        "query":ans
    }
    res = jsonify(d)
    return res

if __name__ == '__main__':
    app.run(debug = True)