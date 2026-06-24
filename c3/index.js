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

//Zadaca 4 - Gradovite podredeni spored grupnata visina na prosekot na studentite od niv

let prosekPoGrad = [];
//Gi dobivame unikatnite gradovi
let unikatniGradovi = [];
for(let i = 0; i < studenti.length; i++){
    if(!unikatniGradovi.includes(studenti[i].grad)){
        unikatniGradovi.push(studenti[i].grad);
    }
}
// Za sekoj unikaten grad, gi sobirame prosecite na studentite sto se od toj grad
for (let i = 0; i < unikatniGradovi.length; i++){
    let grad = unikatniGradovi[i];
    let sumaProsek = 0;
    let brojStudenti = 0;

    for(let j = 0; j < studenti.length; j++){
        if(studenti[j].grad === grad){
            sumaProsek += studenti[j].prosek;
            brojStudenti++;
        }
    }

    prosekPoGrad.push({ grad: grad, prosek: sumaProsek/brojStudenti});
}


const sorted = prosekPoGrad.sort((a, b) => {
    if(a.prosek < b.prosek) return -1;
    if(a.prosek > b.prosek) return 1;
    return 0;
});

//console.log(unikatniGradovi);
//console.log(prosekPoGrad);

//--------------------------------------------------------------------------------------------------

//npm init -y : vi ja kreira package.json vo proektot (folderot), vi gi incijalizira core modules vo Node.js vo toj ist package.json
//npm i: vi go kreira package-lock.json, odnosno vi gi instalira tie moduli sto gi imate vo package.json

const callMeBack = () => { // ova e vasata karticka sto cekate da vi se izraboti
    console.log("Kartikata vi e gotova, dojdete da ja zemete");
}

//callMeBack();

// //callback funkcija - funkcija sto poviuva nekoja druga funkcija
const callbackFunkcija = (functionn) => { // ova e bankata sto koga vasata ke e gotova ve povikuva da si ja zemete
    functionn();
}

//callbackFunkcija(callMeBack);

//Homework
// Za tie sto ne ja napisavte domasnata od minatiot cas, obidete se da ja napisete
// Reseteja 4 tata zadaca od minatoto domasno, megutoa najdete po elegantno resenie

//--------------------------------------------------------------------------------------------------------------

const fs = require("fs");
//const {Validator} = require("node-input-validator"); - ova vi e third party module, ne se instalira so obicno npm init -y

//ES 5
const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, (err) => {
            if(err){
                return fail(err);
            }else{
                return success();
            }
        })
    });
};

//Ako na fajlot mu treba poveke vreme da se zapise, vo toj slucaj "File written succesfully"
//ke ni se ispise bez toa da e izvrseno a so toa i tocno
// fileWrite("data.txt", "test");
// console.log("File written succesfully"); // vo ovoj slucaj nema da ni napravi problem ako prvo se izpise a potoa se pisuva vo fajlot

// fs.readFile("data.txt", 'utf-8');
// console.log("File read succesfully") // vo ovoj slucaj ke ni bide problem ako sakame da ispiseme podatocite od fajlot pred toj da bide voopsto procitan

//ES 6 
// Promises can be done with then/catch and finally

//then -> when the result of the Promise is successfull/ fulfilled
//catch -> when the result of the Promise has failed/rejected
//finally -> will always be executed, no matter if the result of the Promise is successfull or not

// const fileWrite("test.txt", "testData")
//     .then(()) => {
//         console.log("File written succesfully");
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("This will always be executed");
//     });  
// });

//ES 7 async/await with try/catch blocks ("Syntactical sugar" = sintaksata e poubava/ pocitliva)

// IIFE - immediately invoked function expression - funkcija sto se izvrsuva stom kodot so svoeto izvrsuvanje dojde to toj del od kodot
// Primer za IIFE funkcija
// (async() =>{
//     await fileWrite("test1.txt", "this is a test 1");
//     await fileWrite("test2.txt", "this is a test 2");
//     await fileWrite("test3.txt", "this is a test 3");
//     await fileWrite("test4.txt", "this is a test 4");
// })();

// const main = async() => {
//     await fileWrite("test1.txt", "this is a test 1");
//     await fileWrite("test2.txt", "this is a test 2");
//     await fileWrite("test3.txt", "this is a test 3");
//     await fileWrite("test4.txt", "this is a test 4");
// };

// main();

//Sto ke se izvrsi prvo ?

// Synchronous
// const fileContents = fs.readFileSync("data.txt", "utf-8");
// console.log(fileContents);

// console.log("Second");  // iako ova treba pomalku vreme za da se izvrsi, ako koristime readFileSync, sinhrona funkcija, ova ni e blokirano
// se dodeka toa sto blokira ne se izvrsi prvo

//Asynchronous
// fs.readFile("data.txt", "utf-8", (error, data) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// });

// console.log("Second");  //toa sto moze prvo da go izvrsi, go izvrsuva

const writeFileModule = require("./writeFile");
const readFileModule = require("./readFile");

const filename = 'personalInfo.txt';
const data = "Full Name: Viktor Jordanoski\nAge:32\nProfession: Software Engineer";

writeFileModule.writeFile(filename, data);
readFileModule.readFile(filename);

//Homework
//1. write file with fs -> core module
//2. make a function in another file (Hello world) and use it in another file -> local module
//3. find any package(module) on npmjs.com and use it -> third party modules

