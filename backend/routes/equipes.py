from flask import Blueprint, request, jsonify
from models import Equipe
from database import db

equipes_bp = Blueprint('equipes', __name__)

@equipes_bp.route('/equipes', methods=['GET'])
def get_equipes():
    equipes = Equipe.query.all()
    return jsonify([{"id": e.id, "nome": e.nome} for e in equipes])

@equipes_bp.route('/equipes', methods=['POST'])
def add_equipe():
    data = request.get_json()
    nova = Equipe(nome=data['nome'])
    db.session.add(nova)
    db.session.commit()
    return jsonify({"id": nova.id, "nome": nova.nome}), 201
