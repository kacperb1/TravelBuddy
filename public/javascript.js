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
const list = document.querySelector("#tabelleBeitraege");
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

fetch("/beitraege", {

        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    })
    /*.then(res => {
            // console.log(res.ok, res.status, res)
            if (!res.ok) return Promise.reject(res.status);
            return res.json();
        })*/
    .then((beitraege) => {
        // console.log(reise);
        beitraege.forEach((reise) => {

            const buttonAendern = document.createElement("button");
            buttonAendern.type = "submit";
            buttonAendern.id = reise.id;
            buttonAendern.innerText = "Ändern";
            buttonAendern.addEventListener('click', function() {
                window.location = "/index.html?eid=" + buttonAendern.id;
            }, false);

            const buttonLoeschen = document.createElement("button");
            buttonLoeschen.type = "submit";
            buttonLoeschen.id = reise.id;
            buttonLoeschen.innerText = "Löschen";
            /* buttonLoeschen.addEventListener('click', function() {
                 loeschen(buttonLoeschen.id);
             }, false);*/

            const neueZeile = tabelleBeitraege.insertRow(i);
            i++;
            const neueZelle0 = neueZeile.insertCell(0);
            const neueZelle1 = neueZeile.insertCell(1);
            const neueZelle2 = neueZeile.insertCell(2);
            const neueZelle3 = neueZeile.insertCell(3);

            neueZelle0.innerHTML = beitraege.titel;
            neueZelle1.innerHTML = beitraege.beschreibung;
            neueZelle2.appendChild(buttonAendern);
            neueZelle3.appendChild(buttonLoeschen);

            buttonLoeschen.addEventListener("click", () => {

                fetch(`/beitraege/${reise.id}`, {

                    method: "DELETE",

                }).then((res) => {

                    if (res.ok) {

                        neueZeile.remove();
                    }
                });
            });
            neueZeile.append(buttonLoeschen);
            tabelleBeitraege.appendChild(neueZeile);

        });
    })
    .catch((e) => {
        alert(`WHOOPS: ${e}`);
    });


function loeschen(beitragid) {
    fetch('/beitraege/' + beitragid, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(eintrag => {
            location.reload(true);
        });
}