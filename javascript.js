/* Navigationsleiste responsiv! Funktioniert nicht wie es soll in den HTML Seiten!!! */
const NavResponsiv=() => {
    let navigationsElement = document.getElementById("navigation");
    if (navigationsElement.className === "navigation") {
        navigationsElement.className += "responsive";
    } else {
        navigationsElement.className = "navigation";
    }
}

/* Registrieren Formular */

const formRegister = document.querySelector("form.register");

formRegister.addEventListener("submit", (evt)=> {
    evt.preventDefault();
    const values = Object.fromEntries(new FormData(evt.target));

    console.log(values);

alert("TEST Registrierung");

});

formRegister.addEventListener("cancel", (evt) => {
    evt.preventDefault();
    const values = Object.fromEntries(new FormData(evt.target));

    console.log(values);
});

/* Login Formular */

formLogin.addEventListener("submit", (evt)=> {
    evt.preventDefault();
    const values = Object.fromEntries(new FormData(evt.target));
    
    console.log(values);
    alert("TEST Login");

});

formLogin.addEventListener("cancel", (evt) => {
    evt.preventDefault();
    const values = Object.fromEntries(new FormData(evt.target));

    console.log(values);
    alert("TEST Abbruch");
});

const buttonSignUp = document.querySelector("#signup");
const buttonCancel = document.querySelector("#cancel");
const buttonSubmit = document.querySelector("#submit");

/* weiß nicht, ob man das hier drunter an der Stelle braucht...

buttonSubmit.addEventListener("click"), () => {
     
 fetch("https://jsonplaceholder.typicode.com/todos")
.then(res =>) {
    console.log(res.ok, res.status, res;
        
        if (!res.ok) return
        
       const values = Object.fromEntries(new FormData(evt.target));
       alert("HOORAY");
}

buttonCancel.addEventListener("click"),() =>{
    const values = Object.fromEntries(new FormData(evt.target));
    alert ("TEST");
}
*/