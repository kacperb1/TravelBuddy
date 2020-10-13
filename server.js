const express = require('express');
const app = express();

const Beitrag = require('./Beitrag.json');

app.use(express.static('public'));
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/Beitrag', (req, res) => {
    res.json(Beitrag);
});

app.get('/Beitrag/:id', (req, res) => {
    const Beitragid = req.params.id;
    let e1 = Beitrag[Beitragid];

    res.json({ e1 });

});

app.post('/Beitrag', (req, res) => {
    const neuerBeitrag = req.body;

    Beitrag.push(neuerBeitrag);

    res.status(201).json(Beitrag);
});

app.delete('/Beitrag/:id', (req, res) => {
    const Beitragid = req.params.id;

    Beitrag.splice(Beitragid, 1);

    console.log(Beitrag);
    res.status(201).json(Beitrag);
});

app.put('/Beitrag/:id', (req, res) => {

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