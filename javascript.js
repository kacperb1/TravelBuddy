/* Responsive Navigationsleiste, Code übernommen und abgeändert von https://www.w3schools.com/howto/howto_js_topnav_responsive.asp (Auch in den .html Dokumenten)*/
function NavResponsiv() {
    var x = document.getElementById("navigation");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}
window.onload = function() {


    var popup = document.querySelector(".popup");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function togglePopup() {
        popup.classList.toggle("show-modal");
    }

    function windowOnClick(event) { if (event.target === popup) { togglePopup(); } }

    trigger.addEventListener("click", togglePopup);
    closeButton.addEventListener("click", togglePopup);
    window.addEventListener("click", windowOnClick);
}