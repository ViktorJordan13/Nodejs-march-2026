//Homework 2.4 - more elegant solution

const studenti = [
    { ime: "Bojan", prosek: 7.5, grad: "Skopje" }, //[0] => {}
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Bitola" },
    { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
    { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
    { ime: "Vancho", prosek: 10, grad: "Tetovo" },
    { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
    { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
    { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

// Zadaca 4 - Gradovite podredeni spored grupnata visina na prosekot na studentite od niv

const grupiraniStudenti = {};
for ( let student of studenti){
    if(grupiraniStudenti[student.grad]){
        grupiraniStudenti[student.grad].push(student);
    }else{
        grupiraniStudenti[student.grad] = [student];
    }
}

//console.log(grupiraniStudenti);

const gradovi = [];
for(let grad in grupiraniStudenti){
    const studentiVoGrad = grupiraniStudenti[grad];
    const prosekVoGrad = studentiVoGrad.reduce((sum, student) => sum + student.prosek, 0) / studentiVoGrad.length;
    gradovi.push({grad, prosek: prosekVoGrad});
}

gradovi.sort((a,b) => b.prosek - a.prosek);

//console.log("Resenie na 4ta podzadaca", gradovi);

// -------------------------------------------------------------------------------------------------------------------------

// Server - kompjuter sto cuva odredeni podatoci i gi opsluzuva tie sto imaat privilegii da pristapat do niv
// Client - kompjuter sto gi koristi tie podatoci od serverot

// http - klientot vika: daj mi gi podatocite === request; serverot vika: eve ti gi podatocite === response

// http request methods
// 1. GET (Read) -> no body, has path for requesting data from server -> READS EXISTING DATA
// 2. POST (Create) -> has body -> CREATES NEW ENTRY ( email-ot sto sakame da go kreirame od primerot )
// 3. PUT -> has body (Updates-deletes old data, overwrites with new data) -> UPDATES existing entry (moite podatoci za mejlot)
// 4. PATCH -> has body (Update- doesn't delete the old data, only changes specific parts of it) -> UPDATES existing entry partially
// 5. DELETE (Delete) -> body is optional -> DELETES AN ENTRY

//example of body
const account = {
    name: "Viktor",
    surname: "Jordanoski",
    age: 32,
    email: "viktorj560@gmail.com"
}

//http response types

// 100 - Information
// 200 - Success
// 300 - Redirect
// 400 - Client error messages
// 500 - Server error messages

const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Test SERVER Message EDITED");
    res.end();
});

//server.listen(8080); // go startuvame serverot (so toa sto dodeka e terminalot aktiven slusa) na portot 8080

const url = require("url");

const serverNov = http.createServer((req, res) => {
    const url = req.url
    const method = req.method // GET, POST, PUT, PATCH, DELETE

    if(url === "/"){ // Home endpoint
        res.write("Home page");
        res.end();
    }
    if(url === "/student"){
        res.write("Studenti");
        res.end();
    }
});

// serverNov.listen(8000);

// Bitni raboti za Node.js:
// asynchronous language -> non-blocking on a request
// event driven -> reaction to an action iniated by a user or computer system
// it enables writing Javascript on server side
// V8 engine - chromium

const serverResponseCode = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    res.end("<h1>This is the html text</h1>");
});

// serverResponseCode.listen(8001);

const serverWithURL = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    const q = url.parse(req.url, true).query;
    const text = q.year + " " + q.month + " " + q.quarter;
    res.end(text);
});

//serverWithURL.listen(8002);
//to test this server, write something like this: http://localhost:8002/?year=2026&month=06&quarter=2

//-----------------------------------------------------------------------------------------------------------------------------------------------

// Reqular expressions - RegEx
// so pomos na regex ke proveram dali stringot e validen mejl na primer
// viktor.email@gmail - ova ne e validen mejl
// viktorj560@gmail.com - ova e validen mejl

//RegExp, toa e vgraden object vo Javascript
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // ova vi se pattenrs, odnosno semata so koja sto gi sporeduvate vrednostite
const text = "This is an example text";
const result = regex.test(text);
console.log(result);

// Sintaksa od regularnite izrazi

// ., ?, !... - odgovara na poedinecen znak
// \d - odgovara na bilo koj znak sto e brojka
// \w - odgovara na bilo koj alfanumericen znak
// + - odgovara na ednas ili poveke pati prethodno povtoren izraz
// * - odgovara na nula ili poveke pati povtoren izraz
// ? - oznacuva deka prethodniot izraz moze da bide prisuten ili otsuten
// [] - definira mnozestvo znakovi koe odgovara na eden od znakovite vo mnozestvoto
// () - grupira del od regularniot izraz

//---------------------------------------------------------------------------------------------------------