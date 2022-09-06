from email import message
from enum import unique
from datetime import datetime
import os
import json
from pyexpat.errors import messages
from flask import Flask, redirect, abort, render_template, request, send_from_directory, session, url_for
from flask_socketio import SocketIO, join_room, leave_room, send, emit
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
# from retro_game_respository import user_repository_singleton
import sqlalchemy
from dotenv import load_dotenv


load_dotenv()
app = Flask(__name__)
# bcrypt = Bcrypt()



app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = os.getenv('SECRET_KEY')


bcrypt = Bcrypt()
bcrypt.init_app(app)
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'app_user'
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)

    def __init__(self, username, password) -> None:
        self.password = password
        self.username = username

@app.get('/')
def index():
    return render_template('landing_page.html')

@app.get('/game')
def game():
    return render_template('game.html')

@app.get('/register')
def get_register_page():
    return render_template('register.html')

@app.post('/register')
def register():
    username = request.form.get('username')
    password = request.form.get('password')

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(username, hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return redirect('/')

@app.get('/login')
def login():
    return render_template('login.html')
