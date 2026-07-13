//MERN stack = Mongo(NoSQL), Express, React, Node

//Task
//1. Install axios or any simmilar module to fetch data from https://jsonplaceholder.typicode.com/users
//2. Display the data from that API - usernames 
//3. Display the data from that API - their email and website
//html and css

const express = require("express");

const app = express();

//EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let data = {
        fullName: "Petar Petreski",
        ime: "Monika",
        prezime: "Gjorgieska",
        array: [
            {imeNaElementot: "Element1" },
            {imeNaElementot: "Element2"},
        ],
        books: [
            {author: "Fridrich Nietche", year: 1890},
            {author: "JRR Tolkien", year: 1950},
            {author: "GRR Martin", year: 2010},
        ]
    };
    res.render("index", data);
});

app.listen(8000, (err) => {
    if(err) console.log(err);
    console.log("Server started at port 8000!");
});

//Homework 
// 1. na route/analiza (app.get, metodata da bide GET)
// 2. treba da se pojavuva formular vo koj ke ima textarea input vo koj ke se vnesuva text
// 3. pri pravenje na submit na formularot, podatocite ke se isprakaat na /analiza (istiot url, samo metodata ke bide POST)
// 4. Logika:
// Tekstot vnesen vo text-area-ta ke bide analiziran i ispisan po slednive tocki:
    // vkupen broj na karakteri
    // vkupen broj na zborovi pomali od 5 karakteri
    // vkupen broj na zborovi pogolemi od 5 karakteri
    // vkupen broj na zborovi ednakvi na 5 karakteri
    // vkupen broj na paragrafi
    // vkupen broj na zborovi
    // BONUS broj na zborovi koi pocnuvaat na edna od slednive karakteri (a, o, u, i, e)- I so mali i so golemi bukvi!

//Hints
// 1. povikajte gi vo index.js modulite express i ejs, napravete edna GET ruta /analiza i edna POST ruta /analiza
// 2. vo controllers napisete eden kontroler (handler) i vo nego vazno e da imate 2 funkcii getAnalysis i postAnalysis
// 3. napravete vo views folder UI=to da vi bide ili so html format (so parseTemplate funkcijata od predhodniot cas),
// ili sp ejs kako na ovoj cas sto pokazavme
// 4. Prikazete so bilo koe od niv vnesot na tekstot i rezultato
// Posleden hint: pri getAnalysis vratete res.render("get-forma(Ili html ili ejs tip na fajl)")
// pri postAnalysis vratete res.render("post-forma(html ili ejs tip na fajl) ...data)"  