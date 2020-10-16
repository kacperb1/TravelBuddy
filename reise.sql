DROP DATABASE IF EXISTS travelbuddy;
 
CREATE DATABASE IF NOT EXISTS travelbuddy;

USE travelbuddy;

--
-- Datenbank: `travelbuddy`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `reise`
--

CREATE TABLE IF NOT EXISTS Reise(
  ID int NOT NULL AUTO_INCREMENT,
  Titel VARCHAR(30) NOT NULL UNIQUE,
  Inhalt VARCHAR(500) NOT NULL,
  PRIMARY KEY (ID)
)
--
-- Daten für Tabelle `reise`
--

INSERT INTO Reise (Id, Titel, Inhalt) VALUES
(1, "Amsterdam", "Eine super tolle Stadt für jeden. Tolle kleine Gassen. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
(2, "Kroatien", "Somme, Sonne, Strand une Meer - was will man mehr?");
