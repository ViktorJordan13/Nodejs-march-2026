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