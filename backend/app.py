from flask import Flask
from flask_cors import CORS
from database import db
from models import Equipe, Partida
from routes.equipes import equipes_bp
from routes.partidas import partidas_bp

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///banco.db'
CORS(app)
db.init_app(app)

app.register_blueprint(equipes_bp, url_prefix='/api')
app.register_blueprint(partidas_bp, url_prefix='/api')

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
