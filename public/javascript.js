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

//const fetchButton = document.querySelector("#fetchbeitraege");
const eintrag = document.querySelector("#tabelleBeitraege");
const createForm = document.querySelector("#neuerBeitrag");

createForm.addEventListener("submit", (e) => {

    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.target));
    fetch("/beitraege", {

        method: "POST",
        body: JSON.stringify(values),
        headers: {

            "content-type": "application/json",
        },
    }).then((res) => {
        console.log(res.ok);
    });
    console.log("FORM SUBMITTED", values);
});
//fetchButton.addEventListener("click", () => {
  let i = 0;

fetch("/beitraege", {

        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    })
    .then(res => {
            // console.log(res.ok, res.status, res)
            if (!res.ok) return Promise.reject(res.status);
            return res.json();
        })
    .then((beitraege) => {
              beitraege.forEach((beitraege) => {

            const buttonAendern = document.createElement("button");
            buttonAendern.type = "submit";
            buttonAendern.id = i;
            buttonAendern.innerText = "Ändern";

            const buttonLoeschen = document.createElement("button");
            buttonLoeschen.type = "submit";
            buttonLoeschen.id = i;
            buttonLoeschen.innerText = "Löschen";
            /* buttonLoeschen.addEventListener('click', function() {
                 loeschen(buttonLoeschen.id);
             }, false);*/

            const neueZeile = tabelleReisen.insertRow(i);
            i++;
            const neueZelle0 = neueZeile.insertCell(0);
            const neueZelle1 = neueZeile.insertCell(1);
            const neueZelle2 = neueZeile.insertCell(2);
            const neueZelle3 = neueZeile.insertCell(3);

            neueZelle0.innerHTML = beitraege.titel;
            neueZelle1.innerHTML = beitraege.inhalt;
            neueZelle2.appendChild(buttonAendern);
            neueZelle3.appendChild(buttonLoeschen);

            buttonAendern.addEventListener('click', () => {
              console.log("Bearbeiten noch nicht implementiert")
          });

            buttonLoeschen.addEventListener("click", () => {

                fetch(`/beitraege/${beitraege.id}`, {
                    method: "DELETE",
                }).then((res) => {

                    if (res.ok) {
                        neueZeile.remove();
                    }
                });
            });
            tabelleReisen.appendChild(neueZeile);
        });
    })
    .catch((e) => {
        alert(`WHOOPS: ${e}`);
    });

/*
function loeschen(beitragid) {
    fetch('/beitraege/' + beitragid, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(eintrag => {
            location.reload(true);
        });
}*/