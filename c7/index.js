//Task
// So express modulot:
// 1. kreirajte nov server
// 2. na home ispisete "Hello students!"
// 3. na /hello ispisete "Hello world"
// OPTIONAL na adressa "/hello/:name" ispisete na mestoto na (:name) vaseto ime i ispisete go na browserot 

// Struktura na programite spored MVC pattern:
// 1. UI/View - User Interface (Frontend) - vo ovaa zadaca kaj nas toa ni se dvata html calculator fajlovi vo views folderot (2 vo MVC pattern) ->
// 2. Controller (kaj nas toa ni e logikata vo calculator.js) (3 vo MVC pattern) ->
// 3. Router (kaj nas to e vo index.js, zasega nemame potreba za poseben router file)->
// 4. Model (Vo ovaa zadaca nemame entity a so toa ni model) (1 vo MVC pattern) ->
// 5. Database (kaj nas vo ovaa zadaca ovoj cas nema da imame databaza, megutoaod narednite casoi toa ke ni bide fajlovite data.json)

const express = require("express");
const { getCalculator, postCalculator } = require("./controllers/calculator");

const app = express()

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Home page of this application");
    //res.end();
});

app.get("/hello/:name", (req, res) => {
    //queryString starts from ?
    //req.params
    //req.query

    res.send(req.params.name);
    console.log(req.params.name);
    //res.end();
});

app.get("/calculator/:op/:a/:b", (req, res) => {

    const {op, a, b} = req.params;

    let result;

    switch(op){
        case "sobiranje":
            result = Number(a) + Number(b);
            res.end(`${result}`);
            break;
        case "odzemanje":
            result = Number(a) - Number(b);
            res.end(`${result}`);
            break;
        case "mnozenje":
            result = Number(a) * Number(b);
            res.end(`${result}`);
            break;
        case "delenje":
            result = Number(a) / Number(b);
            res.end(`${result}`);
            break;
        default:
            res.end("Nepoznata operacija");
    }
});

app.get("/calculator", getCalculator);
app.post("/calculator", postCalculator);

app.listen(8080, (err) => {
    if(err) console.log("greska!", err);
    console.log("server listening on port 8080!");
});

// Homework

// 1. Home - display data for cars(/cars), books(/books), cities(/cities)...on a server with express
// Example:
// const data = {
// cars: ['Car1', 'Audi', 'Mercedes', 'Car4'],
// books: ['Book1', 'Kletnici'],
// cities: ['Skopje', 'Ohrid', 'London', New York'],
//}
// 2. Cars, books, cities - route with query (Hint: req.query) display single car, book, city
// Example we have the cars on a route/cars
// const {query} = req.query
// const car = `Car ${query}`
// 3. Fetch data from https://jsonplaceholder.typicode.com/users
// 4. Display users from this API (just the names)
// OPTIONAL - add html and css

// EJS (Embedded JavaScript), other simmilar templating are Pug(Jade), Handlbars
// Templating rendering engine
// Partial views
// Syntax:
    // <% %> - Executes JavaScript code without outputting any HTML
    // <%= %> - Outputs the result of JavaScript expression as HTML-scaped content
    // <%- %> - Outputs the result of the JavaScript expression raw, unscaped content
    // <%# %> Comments that are not inclucded in the rendered output
    // <% include %> - Includes another EJS template file.
