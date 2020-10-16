# TravelBuddy
PoC einer Community-Webseite zum Teilen von Tipps für Reisen und Urlaube. Die Webseite ist im Rahmen der Vorlesung "Webentwicklung" an der DHBW Stuttgart entwickelt worden im Kurs WWI2019D. Sie verfügt über CRUD-Operationen.

## QuickStart
1. `git clone https://github.com/kacperb1/TravelBuddy.git`
2. `npm install`
3. `npm start`
4. http://localhost:3000

## Architektur
In der Anwendung TravelBuddies werden die Programmiersprachen HTML, CSS und JavaScript verwendet. Das Frontend und das Backend interagieren miteinander mittels Fetch API. Die HTML-Elemente der Webseite verwenden entsprechende CSS-Dateien, um auch visuell ansprechend zu sein.

### Datenmodell
*Beispiel JSON für alle verwendetetn Datenmodelle*

``
[
  { "id": 1, "title": "TODO STUFF" },
  { "id": 2, "title": "TODO MORE STUFF" }
]
``

### REST Services (Backend)
*Beschreibung aller REST Services*

### Frontend
- Startseite, auf der Beiträge - also Reisetipps zu verschiedenen Orten - angezeigt werden. Die Seite beinhaltet eine Maske mit deren Hilfe Benutzer neue Beiträge anlegen können. Außerdem besteht die Möglichkeit Beiträge zu bearbeiten oder zu löschen.
- Die Seiten "Top Urlaubsziele, Allgemeine Tipps und Packliste" beinhalten statische Inhalte
- Die Seite "Inspiration" beinhaltet eine Bildergalerie.
- Auf einigen Seiten wurde mittels eines Flexcontainers der Inhalt responsiv in zwei hälften geteilt, wobei die rechte Hälfte immer eine Quicklinks Liste beinhaltet, welche für die Nutzer der Anwendung hilfreich sein könnten
- Es gibt auch eine Login und Registrieren Seite, wobei hier die Funktionalität mangels Zeit nicht vollständig implementiert werden konnte.
- Alle Seiten verfügen über einen Footer und eine responsive Navigationsleiste mit Logo und Hamburger-Menü Funktionalität
- Auf das Backend wird mittels der Fetch API zugegriffen.
