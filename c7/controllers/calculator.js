const fs = require("fs");

const getCalculator = async(req, res) => {
    try{
        let output = await parseTemplate("calculator_form");
        res.send(output);

    }catch(err){
        console.log(err);
        res.status(500).send("Internal server error");
    }
}

const postCalculator = async(req, res) => {
    
    const {op, a, b} = req.body;

    if(a === "" || b === ""){
        return res.status(400).send("Bad request");
    }

    let result;

    switch(op){
        case "sobiranje":
            result = Number(a) + Number(b);
            //res.end(`${result}`);
            break;
        case "odzemanje":
            result = Number(a) - Number(b);
            //res.end(`${result}`);
            break;
        case "mnozenje":
            result = Number(a) * Number(b);
            //res.end(`${result}`);
            break;
        case "delenje":
            result = Number(a) / Number(b);
            //res.end(`${result}`);
            break;
        default:
            res.end("Nepoznata operacija");
    }
    try{
        let output = await parseTemplate("calculator", {data: result});
        res.send(output);
    }catch(err){
        console.log(err);
        res.status(500).send("Internal server error");
    }
}

const parseTemplate = async(template, data = null) => {
    // ako ne ja povikame parseTemplate so vistinski podatoci, togas data ke ni stoi vo svojata default vrednost sto e null
    console.log("path", `${__dirname}/../views/${template}.html`);
    return new Promise((success, fail)=> {
        fs.readFile(
            `${__dirname}/../views/${template}.html`, // so ova sakame da dojdeme do calculator_form.html i calculator.html i da gi procitame
            "utf-8",
            (err, content) => {
                if(err) return fail(err);
                if(data){
                    for(d in data){
                        content = content.replaceAll(`{{${d}}}`, data[d]);
                    }
                }
                return success(content);
            }
        );
    });
};

module.exports={
    getCalculator,
    postCalculator
}