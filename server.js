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
    });

app.use(express.static("public"));
app.use(express.json());

app.use(
    session({
        secret: "super secret",
        resave: false,
        saveUninitialized: true,
    })
);

/*
const Beitrag = require('./Beitrag.json');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

*/
app.get('/Beitraege', async(req, res) => {

    const [rows] = await connection.execute("Select * from reise");
    res.json(rows);
});

/*app.get('/Beitraege/:id', async(req, res) => {
  const Beitragid = req.params.id;
  const [rows] = await connection.execute("Select * from reise where ID =" + Beitragid);
  let e1 = Beitrag[Beitragid];
    
  res.json({ e1 });

});

/*app.post('/NeueBeitraege', async(req, res) => {
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

app.delete('/Beitrag/:id', (req, res) => {
    const Beitragid = req.params.id;

    Beitrag.splice(Beitragid, 1);

    console.log(Beitrag);
    res.status(201).json(Beitrag);
});
*/
app.post("/neueBeitraege", async (req, res) =>{
    res-status(200).send();

    let post = {
       titel: req.body.titel,
       beschreibung: req.body.inhalt,
    }

    console.log(req.body);
    await connection.execute("Insert into reise (Titel, Inhalt) Values (?, ?)", [req.body.titel, req.body.beschreibung])
   /*connection.query("Insert into reise set ?", post, (err, res) =>{
        if (err) throw err;
        console.log(res);
    });*/
});

/* app.put('/Beitrag/:id', (req, res) => {

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
});*/

app.listen(3000);
