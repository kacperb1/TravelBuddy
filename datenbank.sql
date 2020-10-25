DROP DATABASE IF EXISTS travelbuddy;

CREATE DATABASE IF NOT EXISTS travelbuddy;

USE travelbuddy;

CREATE TABLE IF NOT EXISTS reise (id int NOT NULL AUTO_INCREMENT, reiseTitel char(30), inhalt char(250), constraint reisekey PRIMARY KEY (id));

INSERT INTO reise (reiseTitel, inhalt) VALUES ('Holland', 'Tolle Kanäle, Windmühlen, Kultur und Gras. Das macht Spaß!');
INSERT INTO reise (reiseTitel, inhalt) VALUES ('Spanien', 'Wilde Partys auf Mallorca und viele kulturelle Erlebnisse auf dem Festland! Das Meer bietet die perfekte Abkühlung an heißen Tagen.');
INSERT INTO reise (reiseTitel, inhalt) VALUES ('Berlin', 'Geschichtlich geprägte Hauptstadt Deutschlands. Mit ein bisschen Glück trifft man sogar Frau Merkel.');
INSERT INTO reise (reiseTitel, inhalt) VALUES ('Gardasee', 'Das beste Eis Italiens genießen: in der Eisdiele Gelateria Calcheta in Toscolano Maderno. Top Lokale in der Umgebung mit hausgemachter Pizza und Pasta!');
INSERT INTO reise (reiseTitel, inhalt) VALUES ('Kenia', 'Du willst mal was anderes? Safari? Abenteuer? Wilde Tiere? Kenia bietet atemberaubende Bilder. Aber bitte an Malaria Prophylaxe denken und alte Kleidung mitnehmen, die Einheimischen werden es dir danken.');