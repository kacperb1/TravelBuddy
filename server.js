//Serverseitiges Javascript
const express = require("express");
const mysql = require("mysql2/promise");
const app = express();

mysql.createConnection({
        host: "localhost",
        user: "root",
        password: process.env.DB_PASSWORD,
        database: "travelbuddy",
    })
    .then((con) => {
        connection = con;
    });

app.use(express.static("public"));
app.use(express.json());


//Funktion, die Beiträge aus der DB holt
app.get("/beitraege", async(req, res) => {
    const [
        rows
    ] = await connection.execute("SELECT * FROM reise");
    res.json(rows);
});


//Funktion, die Beiträge hinzufügt
app.post("/beitraege", async(req, res) => {
    const [
        rows,
    ] = await connection.execute(
            "INSERT INTO reise (reiseTitel, inhalt) VALUES (?, ?)", [req.body.titel, req.body.beschreibung])
        .catch((err) => { res.status(500).send('Beitrag konnte nicht gepostet werden.'); });
    res.json({
        titel: req.body.titel,
        inhalt: req.body.beschreibung,
    });
});


//Funktion, die Beiträge bearbeitet
app.put("/beitraege/:id", async(req, res) => {
    const [rows] = await connection.execute("SELECT * FROM reise WHERE id = ?", [req.params.id]);

    var reise = JSON.stringify(rows);
    var reiseTest = reise.substring(1, reise.length - 1);
    var reiseString = JSON.parse(reiseTest);

    try {

        if (req.body.titel_beitrag != reiseString.reiseTitel) {
            const [rows] = await connection.execute("UPDATE reise SET reiseTitel = ? WHERE id = ?", [req.body.titel_beitrag, req.params.id])
        }
        if (req.body.beitrag_inhalt != reiseString.inhalt) {
            const [rows] = await connection.execute("UPDATE reise SET inhalt = ? WHERE id = ?", [req.body.beitrag_inhalt, req.params.id])
        }
    } catch (err) {
        return res.status(500).send('Update fehlgeschlagen');
    }
    res.status(200).send();
});

//Funktion, die Beiträge löscht
app.delete("/beitraege/:id", async(req, res) => {

    const [rows] = await connection.execute("DELETE FROM reise WHERE id = ?", [
        req.params.id,
    ]);

    if (rows.affectedRows === 1) {
        res.status(200).send();
    } else {
        res.status(404).send();
    }
});

//localhost: 3000 lädt die Seite
app.listen(3000);