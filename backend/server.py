from flask import Flask
from flask import Response
from flask import render_template
from flask import request
from flask import jsonify
from flask import send_from_directory
from flask_cors import CORS, cross_origin
import os
import subprocess
import csv

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=['GET'])
@cross_origin()
def index():        
    return '<html><h1>住手！！！！</h1></html>'

@app.route('/api/getPoems/', methods=['GET'])
@cross_origin()
def getPoems():
    poems_dir = '/tmp2/IRgroup1/final/poems'
    rtn_list = []

    if request.args.get('start') != None and request.args.get('end') != None:
        poem_list_path = os.path.join(poems_dir, f'poem_list.txt')
        with open(poem_list_path, 'r') as f:
            rows = list(csv.reader(f))

        start = max(int(request.args.get('start')), 0)
        end = min(int(request.args.get('end')), len(rows)-1)
        for poemID in range(start, end+1):
            poem_path = os.path.join(poems_dir, f'{poemID}.txt')

            with open(poem_path, 'r') as f:
                poem = ''.join(f.readlines())
            
            poem_dict = {'poem': poem, 'title':rows[poemID][1], 'author':rows[poemID][2]}
            rtn_list.append(poem_dict)
    return jsonify({'poems': rtn_list})

@app.route('/api/getPoemNumber', methods=['GET'])
@cross_origin()
def getPoemNumber():
    poems_list_path = '/tmp2/IRgroup1/final/poems/poem_list.txt'
    result = subprocess.run(['wc', '-l', poems_list_path], stdout=subprocess.PIPE)
    line_cnt = result.stdout.decode('utf-8').split(' ')[0]
    return line_cnt
    
@app.route('/api/submitArticle', methods=['GET'])
@cross_origin()
def submitArticle():        
    article = request.args.get('article')

    # Return retrieved music
    return {'id': 100}

@app.route('/api/getMusic')
@cross_origin()
def getMusic():
    id = request.args.get('id')
    def generate():
        with open(f'/tmp2/IRgroup1/final/musics/{id}.wav', "rb") as fwav:
            data = fwav.read(1024)
            while data:
                yield data
                data = fwav.read(1024)
    
    return Response(generate(), mimetype="audio/x-wav")
    # return send_from_directory('', f'{id}.wav')

@app.route('/api/getLyrics')
@cross_origin()
def getLyrics():
    id = request.args.get('id')
    return send_from_directory('/tmp2/IRgroup1/final/lyrics/', f'{id}.txt')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="10726", debug=True)