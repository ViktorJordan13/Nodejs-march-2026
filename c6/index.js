const http = require('http');
const url = require('url');
const fs = require("fs");

const server = http.createServer((request, response) => {
    const url = request.url; //req["url"] go zema url-to
    const method = request.method; // ja zema medotadata od requestot;

    console.log("url", url);
    console.log("method", method);

    if(url === "/"){ //HOME page
        response.write("<html>");

        response.write("<head><title>Enter text </head></title>");
        response.write(`<body> <form actions=""/message method="POST">
        <input type="text" name="message"></input>
        <button type="sumbit">Submit</button>
        </form>     
        </body>`);
        response.write("</html>");
    }

    if(url === "/students"){
        response.write("kako vi se cini dosega studenti ?");
        response.end();
    }

    if(url === "/test" && method === "GET"){
        console.log("test");
        response.write("<html>");
        response.write("<head><title>TEST</title></head>")
        response.write("<body>I OVA E DEL OD TESTOT</body>");
        response.write("</html>");
        response.end();
    }

    if(url === "/message" && method === "GET"){
        response.write("Dali e jasno ?");
        response.end();
    }

    if(url === "/message" && method === "POST"){
        const body = [];
        //gi preveduvam podatocite od masinski zapis vo za nas razbirliv zapis
        request.on("data", (chunk) =>  {
            body.push(chunk);
            console.log(body);
        });

        request.on("end", () => {

            const parsedBody = Buffer.concat(body).toString(); //const num=12345 sto vie tip number ako napravite num.toString() ke vi se konvertira vo "12345"
            const message = parsedBody.split("=")[1];

            fs.writeFileSync("data.txt", parsedBody);

            console.log(parsedBody);
        });
    }

    // response.statusCode= 302;
    // response.setHeader("Location", "/");

    return response.end(); // za da ne mora vo sekoj if statement da postavuvate racno na krajot return.end()
});

server.listen(8080);

// Task
// 1. Create a server, on which
// 2. Write your name, surname and year of birth in the response,
// 3. Each of them should be on a different route.
// 4. Display it when you run the server
// Optional: set headers for each of them

//localhost:xxxx/sobiranje/2/2
const handlerCalculator = (req, res) => {
    const url = req.url;

    // if (url === "/"){
    //     res.write("home");
    // }
    // res.end("OK");

    const [_, operacija, num1, num2] = req.url.split("/");

    const stringNumber = "1";
    Number(stringNumber); // converts string to number

    const number = 1;
    number.toString(); // converts number into string

    let result;

    //"2" + "2" = not ok
    // 2 + 2 = ok

    switch(operacija){
        case "sobiranje":
            result = Number(num1) + Number(num2);
            res.end(`${result}`);
            break;
        case "odzemanje":
            result = Number(num1) - Number(num2);
            res.end(`${result}`);
            break;
        case "mnozenje":
            result = Number(num1) * Number(num2);
            res.end(`${result}`);
            break;
        case "delenje":
            result = Number(num1) / Number(num2);
            res.end(`${result}`);
            break;
        default:
            res.end("Nepoznata operacija");
    }
}

const newServer = http.createServer(handlerCalculator);

newServer.listen(8000);

// Homework
// 1. kreirajte server
// 2. na ruta /home/imePrezimePol -> res.end(<imetoPrezimetoPolot), prvata bukva na sekoe da bide golema
// 3. na ruta /home/title -> dodadete naslov na rutata
// 4. na ruta /home/header -> dodadete vrednost "Ova e header!"
// Optional na handler funkcijata za kalkulator pogore od ovoj cas dodadete modul (%), kvadrat (n^2) i kub (n^3)

//------------------------------------------------------------------------------------------------------------------------

// Middleware - set of functions or code snippets that are executed in a sequnatial manner during the processing of HTTP request or response

// Design pattern - general repeatable solution to a commonly occuring problem in software desing

// MVC (Model View Controller) - it is used to separate different functionalities and responsibilites within an application

// 1. Model -> the model represents the data (students, cars, movies, crypto currencies, etc ...) and the bussiness logic
// of the application (in our case simple CRUD functionalities)

// 2. Controller -> the controller acts as an intermediary(bridge) between the model and the view

// 3. View -> the view is resposible for presenting the data to the user (html)

// Express module -> wrapper around http core module (that means that express is not a core module)

// npm install express

const express = require("express");

const app = express();
// Methods: GET, POST, PUT, PATCH, DELETE

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false })); // POST, PUT, PATCH
// in the above example, express.urlencoded({ extended: false }) is added as a middleware app.use()
// The extended option determines whetehr to use the querying library (false) or use the qs library for parsing URL-encoded data
// Once this middleware is added, we can access the parsed form in the req.body object within our routes
// handler(contoller)
// The req.body object will contain key-value pairs corresponding to the form fields.

// THIS IS FOR EXPRESS THAT IS LOWER OR EQUAL TO 4.16!
// If your express version is higher than 4.16, instead of using express.urlencoded middleware, you can install and use the body-parser
// middleware to achieve the same functionality

app.get("/", (req, res) =>{
    res.send("My first server with express");
});

app.get("/form", (req, res) => {
    // Access the form data from req.body
    console.log(req.body);
    res.send(" Form submitted succesfully");
});

//app.post("/form", (req, res) => ...

app.listen(3000, (err) => {
    if(err) console.log("Greska", err);
    console.log("Server listening on port 3000!");
});
