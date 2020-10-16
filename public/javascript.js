//Clientseitiges Javascript

//const { json } = require("express");

/* Responsive Navigationsleiste, Code übernommen und abgeändert von https://www.w3schools.com/howto/howto_js_topnav_responsive.asp (Auch in den .html Dokumenten)*/
function NavResponsiv() {
    const x = document.getElementById("navigation");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}
/* Navigationsleiste Ende */


async function getBeitrag() {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const id = url.searchParams.get("eid");
    let response = await fetch('/Beitrag/' + id);
    let daten = await response.json().then(resData => { return resData });
    return daten;
}


/*const insertRow = (row) => {
    const titelHTML = `<tr id="row${row.id}"><td>${row.titel}</td>`;
    const inhaltHTML = `<td>${row.inhalt}</td>`


    tbody.insertAdjacentHTML('beforeend', titelHTML + inhaltHTML);


    fetch("/Beitraege", {
        method: "PUT",
        body: JSON.stringify(values),
        headers: {
            "content-type": "application/json",
        }
    }).then((res) => {
        console.log(res.ok);
        // ladeBeitraege(); //tabelle wird neu geladen um aktualisierte Beitraege gleich anzuzeigen
    }).catch((e) => {
        alert(e)
    });

    console.log("Funktioniert", values);
};
*/

const NeuesFormular = document.querySelector("#neuerBeitrag");

NeuesFormular.addEventListener('submit', (event) => {
    event.preventDefault();

    const values = Object.fromEntries(new FormData(event.target));
    console.log(values);
});



let aenderBeitrag = getBeitrag();
const url_string = window.location.href;
const url = new URL(url_string);
const id = url.searchParams.get("eid");

aenderBeitrag.titel = document.querySelector("#titel").value;
aenderBeitrag.beschreibung = document.querySelector("#beschreibung").value;


fetch('/beitrag/' + id, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(aenderBeitrag)
    })
    .then(res => res.json())
    .then(beitrag => {
        const url_string = window.location.href;
        const url = new URL(url_string);
        window.location.href = "/index.html"
    });


const zeahlerAendern = 0;
const zeahlerLoeschen = 0;
const zahelerEintraege = 0;
const eintraege = document.getElementById("beitraege");
let i = 0;

fetch("/beitrag").then(res => {
    return res.json();
}).then(beitrag => {
    beitrag.forEach(beitrag => {

        const buttonAendern = document.createElement("button");
        buttonAendern.type = "submit";
        buttonAendern.id = zeahlerAendern;
        zeahlerAendern++;
        buttonAendern.innerText = "Ändern";
        buttonAendern.addEventListener('click', function() {
            window.location = "/index.html?eid=" + buttonAendern.id;
        }, false);

        const buttonLoeschen = document.createElement("button");
        buttonLoeschen.type = "submit";
        buttonLoeschen.id = zeahlerLoeschen;
        zeahlerLoeschen++;
        buttonLoeschen.innerText = "Löschen";
        buttonLoeschen.addEventListener('click', function() {
            loeschen(buttonLoeschen.id);
        }, false);

        const neueZeile = beitraege.insertRow(i);
        i++;
        const neueZelle0 = neueZeile.insertCell(0);
        const neueZelle1 = neueZeile.insertCell(1);
        const neueZelle2 = neueZeile.insertCell(2);
        const neueZelle3 = neueZeile.insertCell(3);

        neueZelle0.innerHTML = beitrag.titel;
        neueZelle1.innerHTML = beitrag.beschreibung;
        neueZelle2.appendChild(buttonAendern);
        neueZelle3.appendChild(buttonLoeschen);
    });
});


NeuesFormular.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch("/beitrag", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ titel: document.querySelector("#titel").value, beschreibung: document.querySelector("#beschreibung").value })
    }).then(res => {
        JSONSetObject(json);
        return res.json();
    });
});

function loeschen(beitragid) {
    fetch('/beitrag/' + beitragid, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(eintrag => {
            location.reload(true);
        });
}