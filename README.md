# TravelBuddy
PoC einer Community-Webseite zum Teilen von Tipps für Reisen und Urlaube. Die Webseite ist im Rahmen der Vorlesung "Webentwicklung" an der DHBW Stuttgart entwickelt worden im Kurs WWI2019D. 
Die Community-Webseite "Travelbuddy" bietet die Möglichkeit, sich über Reisen auszutauschen. Tipps und Erfahrungsberichte können erstellt und geteilt werden. Abgesehen davon bietet die Seite zahlreiche weitere Informationen zu Packlisten, den beliebtesten Urlaubszielen der Entwickler und inspirierende Bilder aus aller Welt.

Auf der Startseite werden aus einer Datenbank die Urlaubsbeiträge geladen, die folgende Informationen beinhalten:
Titel
Beschreibung

Zusätzlich hat jeder Beitrag seine eigenen "Löschen" und "Ändern" Buttons, wodurch die Beiträge entsprechend angepasst werden können. Der Button "Bearbeiten" öffnet hierbei eine neue Seite, worüber Titel und/oder der Inhalt des Beitrags verändert werden können.
Neue Beiträge können über den Button "Erstellen" hinzugefügt werden, sofern die beiden darüberliegenden Felder ausgefüllt wurden. Mit dem Klick auf "Hinzufügen" wird der neue Beitrag in der Datenbank gespeichert und gleichzeitig der Tabelle hinzugefügt.


## QuickStart
1. `git clone https://github.com/kacperb1/TravelBuddy.git`
2. `npm install`
3. datenbank.sql in MySQL importieren
4. MySQL mit Nutzer "root" und Passwort "" starten
5. `npm start`
6. http://localhost:3000

## Architektur
In der Anwendung TravelBuddies werden die Programmiersprachen HTML, CSS und JavaScript verwendet. Aufgeteilt wird die Anwendung in Frontend, Backend und Datenbank.

Das Frontend und das Backend interagieren miteinander mittels Fetch API. Die HTML-Elemente der Webseite verwenden eine entsprechende CSS-Datei, um auch visuell ansprechend zu sein. Das Backend dient als Schnittstelle zwischen dem Frontend und der angebundenen Datenbank. Das bedeutet, dass Eingaben aus dem Frontend dort verarbeitet werden, sodass entsprechende Abfragen oder Aktualisierungen auf die Datenbank ausgeführt werden können. Die Daten werden als JSON-Objekte verarbeitet und übertragen.
Die Datenbank basiert auf MySQL und beinhaltet eine Tabelle ("reise"), die alle Datensätze der Anwendung speichert.

### Datenmodell
*Beispiel JSON für alle verwendeten Datenmodelle*

``
[
  { "id": 1, "reiseTitel": "Holland", "inhalt": "Tolle Kanäle, Windmühlen, Kultur und Gras. Das macht Spaß!" },
  { "id": 2, "reiseTitel": "Spanien", "inhalt": "Wilde Partys auf Mallorca und viele kulturelle Erlebnisse auf dem Festland! Das Meer bietet die perfekte Abkühlung an heißen Tagen." }
]
``


### REST Services (Backend)
*Beschreibung aller REST Services*

GET Route auf "/beitraege" => Führt ein SELECT SQL-Statement aus, um alle Datensätze der Tabelle „reise“ zu laden.

POST Route auf "/beitraege" => Führt ein INSERT INTO SQL-Statement zum Einfügen eines neuen Beitrags in die Tabelle „reise“ aus.

PUT Route auf "/beitraege/:id" => Führt ein SELECT SQL-Statement aus, um den entsprechenden Datensatz der Tabelle „reise“ zu laden und im Anschluss werden UPDATE Statements ausgeführt, um die Änderungen in die Datenbank zu überschreiben.

DELETE Route auf "/beitraege/:id" => Führt ein DELETE SQL-Statement aus, um den entsprechenden Datensatz der Tabelle „reise“ zu entfernen.

### Frontend
Das Frontend setzt sich aus mehreren Seiten zusammen, die alle eine responsive Navigationsleiste mit Logo und Hamburger-Menü Funktionalität sowie einen Footer beinhalten. 
Die Startseite zeigt Beiträge, also Reisetipps zu verschiedenen Orten, an. Sie beinhaltet eine Maske, mit deren Hilfe Benutzer neue Beiträge (Titel und Inhalt) anlegen können. Außerdem besteht die Möglichkeit, bestehende Beiträge mit einem Klick auf entsprechende Buttons zu bearbeiten oder zu löschen.
Das Bearbeiten eines Beitrags funktioniert über die Maske auf einer separaten HTML Seite, die sich öffnet, wenn der Button "Ändern" geklickt wird. Die Seite beinhaltet ebenso wie die Startseite Textfelder für das Eintragen von Tital und Inhalt.

Die Seiten "Top Urlaubsziele, Allgemeine Tipps und Packliste" beinhalten statische Inhalte.
Die Seite "Inspiration" beinhaltet eine Bildergalerie.

Auf einigen Seiten wurde mittels eines Flexcontainers der Inhalt responsiv in zwei Hälften geteilt, wobei die rechte Hälfte immer eine Quicklinks Liste beinhaltet, welche für die Nutzer der Anwendung hilfreich sein könnten.

Es gibt auch eine Login und Registrieren Seite, wobei hier die Funktionalität aufgrund mangelnder Zeit nicht vollständig implementiert werden konnte.
