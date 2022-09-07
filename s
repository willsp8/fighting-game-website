DROP DATABASE IF EXISTS fighting_webApp1;
CREATE DATABASE IF NOT EXISTS fighting_webApp1;
use fighting_webApp1;

drop table app_user;
CREATE TABLE app_user(
	user_id INT AUTO_INCREMENT,
	username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
	 PRIMARY KEY (user_id)
);

select username FROM app_user