from flask import Blueprint, request, jsonify
from models import Partida
from database import db

partidas_bp = Blueprint('partidas', __name__)

@partidas_bp.route('/partidas', methods=['GET'])
def get_partidas():
    partidas = Partida.query.all()
    return jsonify([{"id": p.id, "local": p.local, "horario": p.horario} for p in partidas])

@partidas_bp.route('/partidas', methods=['POST'])
def add_partida():
    data = request.get_json()
    nova = Partida(local=data['local'], horario=data['horario'])
    db.session.add(nova)
    db.session.commit()
    return jsonify({"id": nova.id, "local": nova.local, "horario": nova.horario}), 201
