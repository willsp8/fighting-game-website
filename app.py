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

class Following(db.Model):
    __tablename__ = 'following'
    following_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable = True)
    follow_id = db.Column(db.Integer, db.ForeignKey('app_user.user_id'), nullable=True)

    def __init__(self,  username, follow_id) -> None:
        
        self.username = username
        self.follow_id = follow_id

@app.get('/')
def index():
    if 'user' in session:
       return redirect('/success')
    return render_template('landing_page.html')

@app.get('/game')
def game():
    return render_template('game.html')

@app.get('/register')
def get_register_page():
    if 'user' in session:
       return redirect('/success')
    return render_template('register.html')

@app.post('/register')
def register():
    username = request.form.get('username', '')
    password = request.form.get('password', '')

    if username == '' or password == '':
        abort(400)

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(username, hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return redirect('/')

@app.get('/login')
def login():
    return render_template('login.html ')

@app.post('/login')
def post_login():
    username = request.form.get('username', '')
    password = request.form.get('password', '')

    # if user didnt put in anything for passowrd or username 
    if username == '' or password == '':
        abort(400)
    
    existing_user = User.query.filter_by(username=username).first()
    
    if not existing_user or existing_user.user_id == 0:
        return redirect('/fail')

    if not bcrypt.check_password_hash(existing_user.password, password):
        return redirect('/fail')

    session['user'] = username
    return redirect('/success')

@app.get('/success')
def success():
    if not 'user' in session:
        abort(401)
    return render_template('success.html')

@app.get('/fail')
def fail():
    return render_template('fail.html')

@app.get('/dashboard')
def dashboard():
    all_users = User.query.all()
    all_follows = Following.query.all()
    return render_template('dashboard.html', user=session['user'], allUsers=all_users, allFollows = all_follows)

# @app.post('/dashboard')
# def add_user():
    
#     all_users = User.query.all()
#     add_follow = request.form.get('addFollow', '')
#     follow_id = User.query.filter_by(username=session['user']).first()
#     new_follow = Following(username=add_follow, follow_id=follow_id.user_id)
#     db.session.add(new_follow)
#     db.session.commit()
#     #return render_template('dashboard.html', user=session['user'], allUsers=all_users)
#     return redirect('/dashboard')

@app.get('/gamer/<username>')
def viewProfile(username):
    single_user = User.query.filter_by(username=username).first()
    user_id = User.query.filter_by(username=session['user']).first()
    user_Follow_Table2 = Following.query.query.filter_by(username=username).all()
    user_Follow_Table = None
    for user in user_Follow_Table2:
        print(user.follow_id)
        if user.follow_id == user_id.user_id:
            user_Follow_Table = user
            print(user_Follow_Table)
    all_users = User.query.all()
    all_follows = Following.query.all()
    return render_template('viewProfile.html', user=session['user'], userFollowTable=user_Follow_Table, allUsers=all_users, allFollows = all_follows, singleUser=single_user, user_id=user_id)

@app.post('/gamer/<username>')
def add_user(username):
    print(username)
    single_user = User.query.filter_by(username=username).first()
    user_id = User.query.filter_by(username=session['user']).first()
    user_Follow_Table2 = Following.query.query.filter_by(username=username).all()
    user_Follow_Table = None
    for user in user_Follow_Table2:
        print(user.follow_id)
        if user.follow_id == user_id.user_id:
            user_Follow_Table = user
            print(user.follow_id)
    add_follow = request.form.get('addFollow', '')
    follow_id = User.query.filter_by(username=session['user']).first()
    new_follow = Following(username=add_follow, follow_id=follow_id.user_id)
    db.session.add(new_follow)
    db.session.commit()

    return render_template('viewProfile.html', user=session['user'], userFollowTable=user_Follow_Table, singleUser=single_user, user_id=user_id)
    

@app.post('/logout')
def logout():
    if 'user' not in session:
        abort(401)
    
    del session['user']
    return redirect('/')


