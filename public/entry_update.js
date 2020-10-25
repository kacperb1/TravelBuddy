// Responsive Navigationsleiste, Code übernommen und abgeändert von https://www.w3schools.com/howto/howto_js_topnav_responsive.asp (Auch in den .html Dokumenten)
function NavResponsiv() {
    const x = document.getElementById("navigation");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}


//Skript, der für Bearbeiten eines Beitrags zuständig ist


const changeForm = document.querySelector("#bearbeiteBeitrag");

changeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = new URLSearchParams(window.location.search).get("id");
    const values = Object.fromEntries(new FormData(e.target));
    fetch("/beitraege/:id", {

        method: "put",
        body: JSON.stringify(values),
        headers: {

            "content-type": "application/json",
        },
    }).then((res) => {
        console.log(res.ok);
    });
    console.log("FORM SUBMITTED", values);
    location.href = "index.html";
});