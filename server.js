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


app.get("/beitraege", async(req, res) => {
    const [
        rows
    ] = await connection.execute("SELECT * FROM reise");
    res.json(rows);
});


app.post("/beitraege", async(req, res) => {
    const [
        rows,
    ] = await connection.execute(
            "INSERT INTO reise (reiseTitel, inhalt) VALUES (?, ?)", [req.body.reiseTitel, req.body.inhalt])
        .catch((err) => { res.status(500).send('Beitrag konnte nicht gepostet werden.'); });

    res.json({
        id: rows.insertId,
        titel: req.body.reiseTitel,
        inhalt: req.body.inhalt,
    });
});


app.put("/beitraege", async(req, res) => {
    const [rows] = await connection.execute("SELECT * FROM reise WHERE id=?", [req.body.id]);
    try {
        if (req.body.reiseTitel != rows.reiseTitel) {
            const [rows] = await connection.execute("UPDATE reise SET reiseTitel=? WHERE id=?", [req.body.reiseTitel, req.body.id]);
        }
        if (req.body.inhalt != rows.inhalt) {
            const [rows] = await connection.execute("UPDATE aufgaben SET inhalt=? WHERE id=?", [req.body.inhalt, req.body.id])
        }
    } catch (err) {
        return res.status(500).send('Aktualisieren fehlgeschlagen');
    }

    res.status(200).send();
});


app.delete("/beitraege/:id", async(req, res) => {
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


app.listen(3000);