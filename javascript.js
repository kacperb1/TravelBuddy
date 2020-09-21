/* Navigationsleiste responsiv! Funktioniert nicht wie es soll in den HTML Seiten!!! */
        function NavResponsiv() {
            var x = document.getElementById("navigation");
            if (x.className === "navigation") {
                x.className += " responsive";
            } else {
                x.className = "navigation";
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

formRegister.addEventListener("button", (evt) => {
    evt.preventDefault();
    const values = Object.fromEntries(new FormData(evt.target));

    console.log(values);

    alert("Test Cancel");
});

/* Login Formular */

const formLogin = document.querySelector("form.login");

formLogin.addEventListener("submit", (evt)=> {
    evt.preventDefault();
    const values = Object.fromEntries(new FormData(evt.target));
    
    console.log(values);
    alert("TEST Login");

});

formLogin.addEventListener("button", (evt) => {
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

/* der nachfolgende Inhalt ist von: https://codeshack.io/basic-login-system-nodejs-express-mysql/ */
const benutzer = {
    benutzername: "Benutzer1" ,
    passwort: "test123",
    email: "milena.schwinghammer@mail.com"};

let mysql = require("mysql");
let express = require("express");
let session = require("express-session");
let bodyParser = require("body-parser");
let path = require("path");

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodelogin'
});

let app = express();

app.listen(3000);

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function(request, response) {
	let username = request.body.username;
	let password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM benutzer WHERE benutzername = ? AND passwort = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/index.html');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});