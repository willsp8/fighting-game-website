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


app = Flask(__name__)
bcrypt = Bcrypt()
bcrypt.init_app(app)


app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

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

    hashed_password = bcrypt.generate_password_hash(password)
    return redirect('/login')

@app.get('/login')
def login():
    return render_template(login.html)
