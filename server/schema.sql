-- CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  message_id   INT(10)      NOT NULL,
  message_text VARCHAR(140) NOT NULL,
  id_Users VARCHAR(20)  NOT NULL,
  id_Rooms VARCHAR(20)  NOT NULL,
  PRIMARY KEY(message_id)
  -- FOREIGN KEY(id_Users) REFERENCES users(user_id),
  -- FOREIGN KEY(id_Rooms) REFERENCES rooms(room_id)
);

-- CREATE TABLE users (
--   user_id   INT(10)      NOT NULL,
--   user_name VARCHAR(20)  NOT NULL,
--   PRIMARY KEY(user_id)
-- );

-- CREATE TABLE rooms (
--   room_id   INT(10)      NOT NULL,
--   room_name VARCHAR(20) NOT NULL,
--   PRIMARY KEY(room_id)
-- );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

