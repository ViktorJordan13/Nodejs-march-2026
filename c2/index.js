// console.log("Hello world!");
// console.log("Hello world again!");

var test = "2";
// = -> zadavame, inicijalizirame vrednost
// == -> proveruvavme dali se dve vrednosti isti spored nivnata vrednost
// === -> proveruvame dali se dve vrednosti isti spored nivnata vrednost i spored nivniot tip
var test2 = 2;
// console.log("Test na dve ednakvi", test == test2);
// console.log("Test na tri ednakvi", test === test2);

// Primitivni tipovi na vrednosti
// 1. number -> broj
// 2. boolean -> tocno/netocno
// 3. string -> tekst
// 4. undefined -> ne definirano, prazno mnozesto

// console.log(test3); // ne postoi voopsto
var test3; // vaka vi e prazno mnozesto
// console.log(test3); // postoi, megutoa vrednosta ne mu e definirana

//5. null
var test4 = null; // vaka ima vresnost na prazno mnozestvo
// console.log(test4); // postoi, i vrednosta mu e null

//6. symbols
//const id1 = Symbol("id") // se koristi za kreiranje na vrednost sto nema nikogas da ima ista vrednost kako drug simbol
// primer user1ID nikoj pat da ne e isto kako user2ID

// Complex (non-primitive types)
// 1. nizi
// 2. objekti
// * funkcii

const arr = ["prvaA", 2, "a", 2, "c"];
// vo klasno programiranje se ova sto go ucime i pisuvame ovde ke morase da bide vo nesto nalik Class Cas2{...<ovde ke ni bese celiot ovoj tekst sto sega go pisuvam>...}
// funkcionalno programiranje

// arr.push(1);
// arr.push(12);
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// Dolzina na nizata
// console.log("Nizata e dolga ", arr.length );
// console.log("koj element na koe mesto e ovoj", arr[0]);
// Nizite sekogas pocnuvaat od 0
// arr.lenght ni e 5, poslednit element vo ovaa niza arr, elementot (c), ni se naoga na pozicijata arr[4]

// Loops-ciklus
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

for(let i = arr.length; i >= 0; i--){
    // console.log(arr[i]); //vo slucajov nie pocnuvame so arr[5], a nie sakame da ispiseme elementi arr[5], arr[4], arr[3], arr[2], arr[1], arr[0]
}

for(let i = arr.length-1; i >= 0; i--){
    // console.log(arr[i]);
}

// funkciite forEach, find, reduce, sort, filter, map...vsusnost iteriraat vrz nizata
// Smetajte kako vo sebe da imaat vgraden for loop(ciklus)

//forEach - forEach ni minuva niz nizata
const loop = arr.forEach((el) => el); //ova e pogresno koristenje
// console.log(loop);

// const loops = arr.forEach((element) =>{
//     console.log(element);
// })
//this will write the values
for(let el of arr){
   // console.log(el);
}
// this will write the indexes (positions in the array) 
for(let el in arr){
    //console.log(el);
}

// Find - idejata na find e da imeme nekoj uslov, barame element sto go ispolnuva toj uslov
// const res = arr.find(el => el === "a") - fancy izgleda, ama e potezok za razbiranje na ovoj nacin ako go koristime
// po ednostaven nacin sto go pravi istoto
const res = arr.find((el) => {
    if(el === 2){
        return el;
    }
});

//console.log(res);

// Map - ni vraka nova niza, vo zavisnost od uslovot sto nie ke go postavime
const mapEl = arr.map((el => el)); //ova raboti ednakvo kako for ciklus
// console.log(mapEl);

const mapEl2 = arr.map((el) => {
    if(el === 2){
        return el;
    }
});
// console.log(mapEl2);

// Reduce - vraka edna vrednost zavisno od uslovot sto ke go postavime
const arrNums = [0, 2, 7, 10, 3, 4, 5, 6, 7, 8, 9, 1];
const reducer = arrNums.reduce((acc, curr) => acc + curr);
// console.log(reducer);

//Sort - ni vraka sortirana niza
const sortData = arrNums.sort((a, b) => {
    if( a < b) return -1 // ako e pomalo, go vraka nazad vo nizata (-1 mesto)
    if( a > b ) return 1 // ako e pogolemo, go stava napred vo nizata (+1 mesto)
    if (a === b) return 0; //ako se isti elementite sto gi sporeduva vo momentot, ne pravi nisto
});

// console.log(sortData);

//Filter - ni vraka niza filtrirana spored usloot sto sme go zadale
const filterData = arrNums.filter((el) => el > 5);
// console.log(filterData);

// Objects
const student = {
    grades: [7, 8, 6, 5, 10, 9, 10, 10],
    name: "Gjuro",
    age: 20,
    university: {
        name: "UKIM",
        faculty: "FINKI",
        subject: "Computer Science"
    },
    getAverage: () => {
        let sum = 0;
        for(let grade of student.grades){
            sum += grade;
        }
        return sum/student.grades.length;
    }
};

// console.log(student.university.faculty);
// console.log(student.getAverage());

function isEven(number){ //funkcija sto proveruva za parni broevi
    return number % 2 === 0;
}

function isOdd(number){ // funkcija sto proveruva za neparni broevi
    return number % 2 != 0;
}

// console.log(isEven(8));
// console.log(isOdd(3));

//Homework

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

//Zadaci:
//1. Site studenti od Skopje cie ime zavrsuva na bukvata a i imaat prosek nad 7, podredeni po ime(rastecki-ascending)
//2. Site studenti koi imaat prosek nad 9, ne se od Skopje, podredeni po prosek, no opagacki (descending)
//3. Prvite 3 studenti koi immat iminja od 5 karakteri(bukvi), podredeni po prosek.
//4. Gradovite podredeni spored grupnata visina na prosekot na studentite od niv
//5. VKupen prosek na studenti ciesto ime zavrsuva na bukvata a, i posle toa isto taka na site ostanati

// ----------------------------------------------------------------------------------------------------------------------------

// Callback function

// Primer

//obicna funkcija sto ispisuva nesto

const callMeBack = () => {
    console.log("Kartikata vi e gotova, dojdete da ja zemete");
}

//callback funkcija
const callbackFunkcija = (fn) => {
    fn();
}

//callbackFunkcija(callMeBack);

// Javascript e single threaded jazik, se izvsuva linija po lija kako sto se cita od gore na dolu.
// Toa znaci deka ne moze paralelno da izvrsuva drug proces

// Syncrhonous(blokiracki) - koga ke dojdes do toj del od kodot, ne prodolzuvaj natamu dodeka ne go izvrsis === blocking
// Asynchronous(ne blokiracki) - koga ke stignes do toj del od kodot, pocni da go izvrsuvas, no prodolzi so izvrsuvanjeto === non blocking

// Verzii na javascript

//ES5 - Callback

// Callback hell - vgnezduvanje na poveke callbacks
// Primer

// function greetMe(callback){
//    if(callback){
//        fn1()
//            fn2()
//                fn3()
//    }
// }

const { printMe } = require("./test");
//printMe();

//CRUD - Create, Read, Update, Delete

const fs = require("fs") //file system - core module
//const {Validator} = require("node-input-validator"); //third party module

//ES6 - Promise

// Promises

//step 1 - prazna funkcija (funkcija so prazno telo)

const fileWrite1 = () => {

};

// step 2 - Promise e objekt, kogo go povikuvame so nov keyword, ondnosno instancirame nov objekt (Promise)

const fileWrite2 = () => {
    return new Promise();
}

// step 3 - vnatre vo Promisot imame anonimna funkcija kako prv parametar sto vraka druga funkija

const fileWrite3 = () => {
    return new Promise(() => {});
}

// step 4 - sega stavame da vraka funkcii, ama ova ke bidat success i fail (parametri sto ke se callback funkcii)

const fileWrite4 = () => {
    return new Promise((success, fail) => {});
}

// step 5 - vnatre zapisuvame nekoj fajl

const fileWrite5 = () => {
    return new Promise((success, fail) => {
        fs.writeFile("data.txt", "Node.js module0", (err) => {
            if(err) console.log(err);
            console.log("File was written succesfully");
        })
    });
}

// step 6 - namesto racno da pecatime vrednosti (hardcoded, gi povikuvame callback funkciite fail() i success())

const fileWrite6 = () => {
    return new Promise((success, fail) => {
        fs.writeFile("data.txt", "Node.js module0", (err) => {
            if(err){
                return fail(err);
            }else{
                return success();
            }
        })
    });
};

// step 7 - gi zamenuvame hardkodiranite vrednosti na imeto na fajlot i podatocite so filename i data, gi dodavame kako input parametri

const fileWrite7 = (filename, data) => {
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

fileWrite7("data.txt", "Node.js course");
fileWrite7("novFajl.txt", "Casot za denes zavrsi, dovolno e!")

// Promise responses can be:
//1. Fulfilled (positive)
//2. Rejected (negative)
//3. Pending (in progress) after some timeout it is negative, rejected