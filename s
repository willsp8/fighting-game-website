DROP DATABASE IF EXISTS fighting_webApp1;
CREATE DATABASE IF NOT EXISTS fighting_webApp1;
use fighting_webApp1;


CREATE TABLE app_user(
	user_id INT AUTO_INCREMENT,
	username VARCHAR(255) NOT NULL UNIQUE,
    profile_pic VARCHAR(255),
    password VARCHAR(255) NOT NULL,
	PRIMARY KEY (user_id)
);

CREATE TABLE following(
	following_id INT AUTO_INCREMENT,
    username TEXT,
    follow_id INT,
    primary key(following_id),
    FOREIGN KEY(follow_id) REFERENCES app_user(user_id)
);

CREATE TABLE IF NOT EXISTS message(
	id INT AUTO_INCREMENT,
    room_id VARCHAR(255),
    text VARCHAR(255),
    sender VARCHAR(255),
    create_at VARCHAR(255),
    profile_pic VARCHAR(255),
    PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS History_1(
	chat_id INT AUTO_INCREMENT,
    message VARCHAR(255),
	PRIMARY KEY (chat_id)
);

select * FROM app_user;
select * FROM following