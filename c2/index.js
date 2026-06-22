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