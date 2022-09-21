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
socketio = SocketIO(app, cors_allowed_origins="*")



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

class Message(db.Model):
    id = db.Column('id', db.Integer, primary_key=True)
    room_id = db.Column('room_id', db.String)
    text = db.Column('text', db.String)
    sender = db.Column('sender', db.String)
    create_at = db.Column('create_at', db.String)

    def save_message(self, room_id, text, sender, create_at):
        message = Message(room_id=room_id, text=text, sender=sender, create_at=create_at)
        db.session.add(message)
        db.session.commit()
        return 
    def find_room_id(self, room_id):
        # this works
        # search_room_id = Message.query.all()
        search_room_id = Message.query.filter(Message.room_id == room_id).all()
        print('heloo')
        
        return search_room_id
message_repository_singleton = Message()  

class History(db.Model):
    id = db.Column('chat_id', db.Integer, primary_key=True)
    message = db.Column('message', db.String)

def get_messages(room_id):
    messages = message_repository_singleton.find_room_id(room_id)
    #for message in messages:
    #    message['created_at'] = message['created_at'].strftime("%d %b, %H:%M")
    return messages

@app.route('/chat')
def chat():
    username = request.args.get('username')
    room = request.args.get('room')
    all_users = User.query.all()
    single_user = User.query.filter_by(username=session['user']).first()
    if username and room:
        messages = get_messages(room)
        print('heloaao')
        print(get_messages(room))
        return render_template('chat_2.html', username=username, user=session['user'], room=room, allUsers=all_users, messages=messages, singleUser=single_user)
    else:
        return redirect('/dashboard')

@socketio.on('send_message')
def handle_send_message_event(data):
    app.logger.info("{} has sent message to the room {}: {}". format(data['username'],
    data['room'], data['message']))

    #message_to_save = Message()
    message_repository_singleton.save_message(data['room'], data['message'], session['user'],  datetime.now())
    socketio.emit('receive_message', data, room=data['room'])

@socketio.on('join_room')
def handle_join_room_event(data):
    app.logger.info("{} has joined the room {}".format(data['username'], data['room']))
    #this will make the client join a certain room
    join_room(data['room'])
    #this will send a message to everyone that someone has joined the room
    socketio.emit('join_room_announcement', data)
#second feature end

#first chat first start

    



#socketIO chatroom
@socketio.on('message')
def handle_message(message):
    print("recieved message: " + message)
    
    
    if message != "User connected!":
        send(message, broadcast=True)
        message = History(message=message)
        db.session.add(message)
        db.session.commit()
        


    
@app.get('/')
def index():
    if 'user' in session:
       return redirect('/success')
    return render_template('landing_page.html')

@app.get('/following/<user>')
def following(user):
    print()
    user_id = User.query.filter_by(username=user).first()
    user_Follow_Table = Following.query.filter(Following.follow_id==user_id.user_id).all()
    return render_template('following.html', user_Follow_Table=user_Follow_Table, user_id=user)

@app.get('/followers/<user>')
def followers(user):
    user_id = User.query.filter_by(username=user).first()
    all_user = User.query.all()
    user_Follow_Table = Following.query.filter(Following.username==user_id.username).all()
    followers = []

    for f in user_Follow_Table:
        for au in all_user:
        
            if(f.follow_id == au.user_id):
                print(f.username, au.username)
                print(f.follow_id, au.user_id)
                followers.append(au)
    return render_template('followers.html', user_Follow_Table=user_Follow_Table, user_id=user, followers=followers)

#delete method


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
    username = request.args.get('username')
    room = request.args.get('room')
    single_user = User.query.filter_by(username=session['user']).first()
    all_users = User.query.all()
    all_follows = Following.query.all()
    messages = get_messages(room)
    
    room = request.args.get('room')

    username = request.args.get('username')
    room = request.args.get('room')
    

    if username and room:
        messages = get_messages(room)
        print('heloaao')
        print(get_messages(room))
        return render_template('dashboard.html', username=username, room=room, messages=messages, singleUser=single_user)
    return render_template('dashboard.html', user=session['user'], allUsers=all_users, allFollows = all_follows, username=username, room=room, messages=messages, singleUser=single_user)

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
    print(username)
    otherusername = username
    single_user = User.query.filter_by(username=username).first()
    user_id = User.query.filter_by(username=session['user']).first()
    user_Follow_Table2 = Following.query.filter(Following.username==otherusername).all()
    user_Follow_Table = None
    for user in user_Follow_Table2:
        if user.follow_id == user_id.user_id:
            user_Follow_Table = user
            switchToUnfollow='false'
            switchTofollow='true'
        else:
            switchToUnfollow='true'
            switchTofollow='false'
            user_Follow_Table = None

    all_users = User.query.all()
    all_follows = Following.query.all()
    return render_template('viewProfile.html', switchToUnfollow=switchToUnfollow, switchTofollow=switchTofollow, user=session['user'], userFollowTable=user_Follow_Table, allUsers=all_users, allFollows = all_follows, singleUser=single_user, user_id=user_id)

@app.post('/gamer/<username>')
def add_user(username):
    print(username)
    single_user = User.query.filter_by(username=username).first()
    user_id = User.query.filter_by(username=session['user']).first()
    user_Follow_Table2 = Following.query.filter(Following.username==username).all()
    user_Follow_Table = None
    
    for user in user_Follow_Table2:
        if user.follow_id == user_id.user_id:
            user_Follow_Table = user

    follow_bool = request.form.get('follow', '')
    unfollow_bool = request.form.get('unfollow', '')
    print(follow_bool)
    follow_bool_2 = ''
    unfollow_bool_2 = ''
    if(follow_bool == 'true'):
        print('should follow')
        add_follow = request.form.get('addFollow', '')
        follow_id = User.query.filter_by(username=session['user']).first()
        new_follow = Following(username=add_follow, follow_id=follow_id.user_id)
        db.session.add(new_follow)
        db.session.commit()
        follow_bool_2 = 'true'
        unfollow_bool_2 = 'false'
        user_Follow_Table2 = Following.query.filter(Following.username==username).all()
        return render_template('viewProfile.html', switchToUnfollow='true', switchTofollow='false', follow_bool_2=follow_bool_2, unfollow_bool_2=unfollow_bool_2,  user=session['user'], userFollowTable=user_Follow_Table, singleUser=single_user, user_id=user_id)
    if(unfollow_bool == 'true'):
        print('should unfollow')
        delete_follow = request.form.get('deleteFollow', '')
        all_follows = Following.query.filter(Following.follow_id == user_id.user_id)
        for all_f in all_follows:
            print(all_f)
            if(all_f != None):
                
            
                if (all_f.username == single_user.username):
                    follow_id = User.query.filter_by(username=delete_follow).first()
                    follow_to_delete =  Following.query.filter(Following.following_id==all_f.following_id).first()
                    print(follow_to_delete.username)
                    print(follow_to_delete.follow_id)
                
                    db.session.delete(follow_to_delete)
                    db.session.commit()
        unfollow_bool_2 = 'true'
        follow_bool_2 = 'false'
        return render_template('viewProfile.html', switchToUnfollow='false', switchTofollow='true', follow_bool_2=follow_bool_2, unfollow_bool_2=unfollow_bool_2,  user=session['user'], userFollowTable=user_Follow_Table, singleUser=single_user, user_id=user_id)
    return render_template('viewProfile.html', switchToUnfollow='false', switchTofollow='false', follow_bool_2=follow_bool_2, unfollow_bool_2=unfollow_bool_2,  user=session['user'], userFollowTable=user_Follow_Table, singleUser=single_user, user_id=user_id)

    

@app.post('/logout')
def logout():
    if 'user' not in session:
        abort(401)
    
    del session['user']
    return redirect('/')


