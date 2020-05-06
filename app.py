from flask import Flask, jsonify, render_template
import psycopg2
import pandas as pd
import json

app = Flask(__name__)

@app.route("/")
def welcome():

    return render_template("index.html")

@app.route("/data")
def data():
    con = psycopg2.connect("host='localhost' dbname='Netflix' user='postgres' password='postgres'")
    data = pd.read_sql('''select * from  public."IMDB5000"''', con=con)
    data = data.to_json(orient='records',date_format='iso')
    return jsonify(json.loads(data))

@app.route("/data2")
def data2():
    con = psycopg2.connect("host='localhost' dbname='Netflix' user='postgres' password='postgres'")
    data2 = pd.read_sql('''select * from  public."Budget_Table"''', con=con)
    data2 = data2.to_json(orient='records',date_format='iso')
    return jsonify(json.loads(data2))

@app.route("/data3")
def data3():
    con = psycopg2.connect("host='localhost' dbname='Netflix' user='postgres' password='postgres'")
    data3 = pd.read_sql('''SELECT * FROM public."movie_map_final"''', con=con)
    data3 = data3.to_json(orient='records',date_format='iso')
    return jsonify(json.loads(data3))

if __name__ == "__main__":
    app.run(debug=True)
