// Task
// koristejki kod od kade bilo, testirajte gi funkciite:
// getAllStudents,
// getSingleStudent,
// addNewStudent,
// deleteStudent,
// editStudent

// iskoristete gi site od ovie funkcii, na sledniot nacin:
// 1. prvo povikajte go getAllStudents
// 2. sledno povikajte go getSigleStudent
// 3. dodajte 3 novi studenti (pokraj podatocite ime prezime godina na diplomiranje, za sekoj dodadete ID!)
// 4. izbrisete 2 od niv
// 5. posledniot sto ke vi ostane editirajte go 
// HINT: posle sekoj od cekorite ispisuvajte so pomos na getAllStudents

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

//Homework
//1. CRUD module for cars, movies, books, cities, patients ... megutoa da bidat operaciite vo fajl
//2. Add new entity (car, movie, book ...) -> data.json
//3. Get all entities and get one entity by id -> Primer: getSingleCarById(2)
//4. Remove entity by id
//5. Edit entity by id
//BONUS try to use parameters instead of hardcoded string in the functions, you will set the file of the functions in the test file