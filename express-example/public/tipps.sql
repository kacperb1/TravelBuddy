--
-- Datenbank: `travelbuddy`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tipps`
--

CREATE TABLE `tipps` (
  `ID` int(11) NOT NULL,
  `Titel` varchar(40) NOT NULL,
  `Tipps` varchar(200) NOT NULL,
  `Bild` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `tipps`
--

INSERT INTO `tipps` (`ID`, `Titel`, `Tipps`, `Bild`) VALUES
(1, 'Berlin', 'Mega geil', 'null'),
(2, 'Amsterdam', 'hammer', 'null');


--
-- Indizes für die Tabelle `tipps`
--
ALTER TABLE `tipps`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `tipps`
--
ALTER TABLE `tipps`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;
