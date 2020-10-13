//serverseitiges Javascript

const express = require("express");
const mysql = require("mysql2/promise");

const app = express();

let connection;

mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "travelbuddy",
  })
  .then((con) => {
    connection = con;
  });

app.use(express.static("public"));
app.use(express.json());

app.get("/orte", async (req, res) => {
  const [rows] = await connection.execute("SELECT * FROM tipps");

  res.json(rows);
});

app.post("/orte", async (req, res) => {
  const [
    rows,
  ] = await connection.execute(
    "INSERT INTO tipps (titel, inhalt, bild VALUES (?, ?, ?)",
    [req.body.titel, req.body.inhalt, req.body.bild]
  );

  res.json({
    id: rows.insertId,
    titel: req.body.titel,
    inhalt: req.body.inhalt,
    bild: req.body.bild,
  });
});

app.delete("/orte/:id", async (req, res) => {
  console.log(req.params.id);

  const [rows] = await connection.execute("DELETE FROM tipps WHERE id = ?", [
    req.params.id,
  ]);

  if (rows.affectedRows === 1) {
    res.status(200).send();
  } else {
    res.status(404).send();
  }
});

app.listen(2222);
