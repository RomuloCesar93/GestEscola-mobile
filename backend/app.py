from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

equipes = []
partidas = []

@app.route('/api/equipes', methods=['GET', 'POST'])
def equipes_route():
    if request.method == 'POST':
        nova_equipe = request.json
        nova_equipe['id'] = len(equipes) + 1
        equipes.append(nova_equipe)
        return jsonify(nova_equipe), 201
    return jsonify(equipes)

@app.route('/api/partidas', methods=['GET', 'POST'])
def partidas_route():
    if request.method == 'POST':
        nova_partida = request.json
        nova_partida['id'] = len(partidas) + 1
        partidas.append(nova_partida)
        return jsonify(nova_partida), 201
    return jsonify(partidas)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
