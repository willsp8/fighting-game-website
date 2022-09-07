DROP DATABASE IF EXISTS fighting_webApp1;
CREATE DATABASE IF NOT EXISTS fighting_webApp1;
use fighting_webApp1;


CREATE TABLE app_user(
	user_id INT AUTO_INCREMENT,
	username VARCHAR(255) NOT NULL UNIQUE,
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

select * FROM following