require("dotenv").config();

const express = require("express");
const mysql = require("mysql2/promise");
const session = require("express-session");

const app = express();

let connection;

mysql
    .createConnection({
        host: "localhost",
        user: "root",
        password: process.env.DB_PASSWORD,
        database: "travelbuddy",
    })
    .then((con) => {
        connection = con;
        console.log("MYSQL Datenbank ist verbunden")
    });

app.use(express.urlencoded({ extended: false })); //Gesendete HTML Inhalte weden nicht in URL angezeigt 

app.use(express.static("public")); //HTML Seiten im public Ordner werden verwendet

app.use(express.json()); //Daten werden als JSON Objekte genutzt

app.use(
    session({
        secret: "super secret",
        resave: false,
        saveUninitialized: true,
    })
);


const Beitrag = require('./beitrag.json');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*
app.get('/beitrag', async(req, res) => {

    const [rows] = await connection.execute("Select * from reise");
    res.json(rows);
});

app.post("/beitrag", async(req, res) => {
    const [
        rows,
    ] = await connection.execute(
        "INSERT INTO reise (titel, inhalt) VALUES (?, ?)", [req.body.titel, req.body.inhalt]
    ).catch((err) => { res.status(500).send('Erstellen des Beitrags fehlgeschlagen'); });

    res.json({
        id: rows.insertId,
        titel: req.body.titel,
        beschreibung: req.body.inhalt,
    });
});

app.put("/beitrag", async(req, res) => {
    const [rows] = await connection.execute("SELECT * FROM reise WHERE id=?", [req.body.id]);
    try {
        if (req.body.titel != rows.titel) {
            const [rows] = await connection.execute("UPDATE reise SET titel=? WHERE id=?", [req.body.titel, req.body.id]);
        }
        if (req.body.inhalt != rows.inhalt) {
            const [rows] = await connection.execute("UPDATE reise SET inhalt=? WHERE id=?", [req.body.inhalt, req.body.id])
        }
    } catch (err) {
        return res.status(500).send('Bearbeiten des Beitrags fehlgeschlagen');
    }

    res.status(200).send();
});

app.delete("/beitrag/:id", async(req, res) => {
    console.log(req.params.id);

    const [rows] = await connection.execute("DELETE FROM reise WHERE id = ?", [
        req.params.id,
    ]);

    if (rows.affectedRows === 1) {
        res.status(200).send();
    } else {
        res.status(404).send();
    }
});

app.get('/breitrag/:id', async(req, res) => {
    const Beitragid = req.params.id;
    const [rows] = await connection.execute("Select * from reise where ID =" + Beitragid);
    let e1 = Beitrag[Beitragid];

    res.json({ e1 });

});

app.post('/beitrag', async(req, res) => {
    const [
        rows
    ] = await connection.execute("Insert into reise (Titel, Inhalt) Values (?, ?)", [req.body.titel, req.body.beschreibung]);
    // neuerBeitrag = req.body;

    //  Beitrag.push(neuerBeitrag);

    // res.status(201).json(Beitrag);
    res.json({
        titel: req.body.titel,
        beschreibung: req.body.beschreibung,
    });
});

app.delete('/beitrag/:id', (req, res) => {
    const Beitragid = req.params.id;

    Beitrag.splice(Beitragid, 1);

    console.log(Beitrag);
    res.status(201).json(Beitrag);
});


app.post("/beitrag", async(req, res) => {
    res - status(200).send();

    let post = {
        titel: req.body.titel,
        beschreibung: req.body.inhalt,
    }

    console.log(req.body);
    await connection.execute("Insert into reise (Titel, Inhalt) Values (?, ?)", [req.body.titel, req.body.beschreibung])
    connection.query("Insert into reise set ?", post, (err, res) => {
        if (err) throw err;
        console.log(res);
    });
});
*/

app.put('/beitrag/:id', (req, res) => {

    const geanderterBeitrag = req.body;
    console.log(geanderterBeitrag);
    let BeitragId = req.params.id;

    let e1 = Beitrag[BeitragId];

    if (e1 === undefined || e1 === null) {
        res.status(404).json({ "error": "Beitrag nicht gefunden!" });
    } else {
        e1.beschreibung = geanderterBeitrag.beschreibung;

        Beitrag.splice(BeitragId, 1, e1);

        console.log(e1);
        console.log(Beitrag);
        res.status(200).json(Beitrag);
    }
});

app.listen(3000);