//Clientseitiges Javascript

//const { json } = require("express");

/* Responsive Navigationsleiste, Code übernommen und abgeändert von https://www.w3schools.com/howto/howto_js_topnav_responsive.asp (Auch in den .html Dokumenten)*/
function NavResponsiv() {
    var x = document.getElementById("navigation");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}
/* Navigationsleiste Ende */


async function getBeitrag() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("eid");
    let response = await fetch('/beitrag/' + id);
    let daten = await response.json().then(resData => { return resData });
    return daten;
}

const NeuesFormular = document.querySelector("#neuerBeitrag");

NeuesFormular.addEventListener('submit', (event) => {
    event.preventDefault();

    const values = Object.fromEntries(new FormData(event.target));
    console.log(values);

    fetch("/NeueBeitraege", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            "content-type": "application/json",
        }
    }).then((res) => {
        console.log(res.ok);
        window.location = "index.html";
    });

    console.log("Funktioniert", values);
});

/* let aenderBeitrag = getBeitrag();
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("eid");

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
            var url_string = window.location.href;
            var url = new URL(url_string);
            window.location.href = "/index.html"
        });
})

var zeahlerAendern = 0;
var zeahlerLoeschen = 0;
var zahelerEintraege = 0;
var eintraege = document.getElementById("beitraege");
let i = 0;

fetch("/beitrag").then(res => {
    return res.json();
}).then(beitrag => {
    beitrag.forEach(beitrag => {

        var buttonAendern = document.createElement("button");
        buttonAendern.type = "submit";
        buttonAendern.id = zeahlerAendern;
        zeahlerAendern++;
        buttonAendern.innerText = "Ändern";
        buttonAendern.addEventListener('click', function() {
            window.location = "/index.html?eid=" + buttonAendern.id;
        }, false);

        var buttonLoeschen = document.createElement("button");
        buttonLoeschen.type = "submit";
        buttonLoeschen.id = zeahlerLoeschen;
        zeahlerLoeschen++;
        buttonLoeschen.innerText = "Löschen";
        buttonLoeschen.addEventListener('click', function() {
            loeschen(buttonLoeschen.id);
        }, false);

        var neueZeile = beitraege.insertRow(i);
        i++;
        var neueZelle0 = neueZeile.insertCell(0);
        var neueZelle1 = neueZeile.insertCell(1);
        var neueZelle2 = neueZeile.insertCell(2);
        var neueZelle3 = neueZeile.insertCell(3);

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

/*

/*const neuerBeitragButton = document.querySelector("#veroeffentlichen");
const alleOrte = document.querySelector("#orte-container");
const Formular = document.querySelector("#beitrag-Form");

Formular.addEventListener("submit", (e) => {
  e.preventDefault();

const Titel = document.querySelector("#titel").value;
const Inhalt = document.querySelector("#inhalt").value;

 // const values = Object.fromEntries(new FormData(e.target));

  fetch("/orte", {
    method: "POST",
    body: JSON.stringify(Titel, Inhalt),
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    console.log(res.ok);
  });

  console.log("FORM SUBMITTED", Titel, Inhalt);
});

neuerBeitragButton.addEventListener("click", () => {
  fetch("/orte")
    .then((res) => {
      // console.log(res.ok, res.status, res);

      if (!res.ok) return Promise.reject(res.status);

      return res.json();
    })
    .then((orte) => {
      // console.log(orte);

      orte.forEach((orte) => {
        const containerBeitrag = document.createElement("div");
        const containerTitel= document.createTextNode("h3");
        const containerItem = document.createTextNode("p");
        containerBeitrag.title = orte.titel;
        containerBeitrag.textContent = orte.inhalt;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Löschen";

        deleteButton.addEventListener("click", () => {
          fetch(`/orte/${orte.id}`, {
            method: "DELETE",
          }).then((res) => {
            if (res.ok) {
              containerBeitrag.remove();
            }
          });
        });

        containerBeitrag.append(deleteButton);

        alleOrte.appendChild(containerBeitrag);
      });
    })
    .catch((e) => {
      alert(`WHOOPS: ${e}`);
    });
});
*/