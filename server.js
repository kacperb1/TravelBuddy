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

app.get("/beitraege", async(req, res) => {
    const [rows] = await connection.execute("SELECT * FROM reise");
    console.log("TESTE LADEN");

    res.json(rows);   
     /*console.log("/todos", req.session.username);

    if (!req.session.username) {

      return res.status(401).send();

    }*/

/*const [
    rows,
  ] = await connection.execute("SELECT * FROM todos WHERE author = ?", [
    req.session.username,
  ]);
*/
});


app.post("/beitraege", async(req, res) => {
    const [
        rows,
    ] = await connection.execute(
        "INSERT INTO reise (titel, inhalt) VALUES (?, ?)",
        [req.body.titel, req.body.beschreibung]
    );

    res.json({
        id: reise.insertId,
        titel: req.body.titel,
        beschreibung: req.body.beschreibung,
    });
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