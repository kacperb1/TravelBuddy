DROP DATABASE IF EXISTS travelbuddy;

CREATE DATABASE IF NOT EXISTS travelbuddy;

USE travelbuddy;

CREATE TABLE IF NOT EXISTS reise (id int NOT NULL AUTO_INCREMENT, reiseTitel char(30), inhalt char(250), constraint reisekey PRIMARY KEY (id));

INSERT INTO reise (reiseTitel, inhalt) VALUES ('Holland', 'Tolle Kanäle, Windmühlen, Kultur und Gras. Das macht Spaß!');
INSERT INTO reise (reiseTitel, inhalt) VALUES ('Spanien', 'Wilde Partys auf Mallorca und viele kulturelle Erlebnisse auf dem Festland!');
INSERT INTO reise (reiseTitel, inhalt) VALUES ('Berlin', 'Geschichtlich geprägte Hauptstadt Deutschlands. Mit ein bisschen Glück trifft man sogar Frau Merkel.');
