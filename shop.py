from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/shop')
def shop():
	lst1 = request.args['lst1']
	lst2 = request.args['lst2']

	return jsonify(lst1+lst2)

