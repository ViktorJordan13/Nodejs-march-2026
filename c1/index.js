//console.log(1);

//console.log("run this first");

//Zagradi (brackets)

// () - mali zagradi (za parametri)
// [] - sredni zagradi (za nizi-arrays)
// {} - golemi zagradi (za block scoped) - block vi e se sto imate od '{' do '}'

//Normal/ Basic funtion

// function hello(){
//     const testArray = [1, 2, 3];
//     console.log("Hello World");
// }

//Call
//hello();

//Reference
//var thisISAReferenceToTheFunction = hello();

// Type (tipovi)
// Primitivni tipovi
// string: "", ''
// number: 1, 2, 3, 4, 2.8, -3...
// boolean: true, false vrednosti
// boolean type; (ako ne e incijializirano null - prazno e);
// const broj;

// Ne primitivni tipovi (Complex)
// 1. nizi(Arrays)
// 2. objekti 

// Variables (promenlivi)
// var x=1 (vrednosta na x e 1)
// x += 1 (x = x + 1) (vrednosta na x e 2)
// x++ (x = x + 1) (vrednosta na x e 3)
// x-- (x = x - 1) (vrednosta na x e 2)



// x = 1 edno ednakvo vo Javascript dodeluva vrednosta 1 na promenlivata x, bez obzira dali e deklarirana so var, const ili let. Razlikata megu niv e vo nivnata funkcionalnost i scope (vidlivost).

// x == y so dve ednakva go sporeduvame x so y, i ako se ednakvi vrakja true, a ako ne se ednakvi vrakja false. Ova e poznato kako "loose equality" (labava ednakvost) i pri toa se pravi konverzija na tipovi ako e potrebno.
//x = 2
//y = "2"
//console.log(x == y) // true, zatoa sto se pravi konverzija na tipovi i stringot "2" se pretvara vo broj 2 pred sporeduvanjeto

// x === y so tri ednakva go sporeduvame x so y, i ako se ednakvi i po vrednost i po tip vrakja true, a ako ne se ednakvi vrakja false. Ova e poznato kako "strict equality" (stroga ednakvost) i pri toa ne se pravi konverzija na tipovi.
// x = 2
// y = "2"
// console.log(x === y)

// var, const, let 
// var broj = 1; // promenlivata sme ja deklarirale kako var, megutoa nejziniot tip po vrednost e number

function hello(){
    const testArray = [1, 2, 3];
    console.log("Hello World");

    const drugBroj = "3";
    var tretBroj = 3;
    let cetvrtiBroj = 4;
}

//hello()

// var - refers to globaj object or value (Postoi i nadvor od scope-ot {})
// let - block scoped (Postoi samo vo scope-ot {})
// const - block scoped (Postoi samo vo scope-ot {}), when we declare a variable with const, we cannot reassign it to a new value. However, if the value is an object or array, we can still modify its properties or elements.
// const ne ja menuva vrednosta samo na primitivnite tipovi, za ne primitivnite tipovi (nizi i objekti) moze da se menuvaat vrednostite na elementite, ama ne moze da se dodeli nova vrednost na promenlivata.

//Primer za const
const primitivenTip = 10
//primitivenTip = 20 // ova ke bide greska, zatoa sto ne moze da se dodeli nova vrednost na promenlivata sto e deklatirana so const

const kompleksenTip = [1, 2, 3]
kompleksenTip.push(4) // ova e validno, zatoa sto ne se dodeluva nova vrednost na promenlivata niz, tuku se menuva elementot na nizata
kompleksenTip.pop();
kompleksenTip.pop();
kompleksenTip.push(20);
//console.log(kompleksenTip);

//Functions (funkcii)

//anonimna function (funkcija bez ime)
() => {};

// 1. Normal function (deklaracija na funkcija)
function normalBasicFunkcija() {
    console.log("Ova e normalna funkcija");
}
//normalBasicFunkcija()
// 2. Function expression (deklaracija na funkcija kako vrednost na promenliva) - deklarativna funkcija so ime, ama se dodeluva na promenliva
const functionExpression = function() {
    console.log("Ova e function expression");
}
//functionExpression();
// 3. Arrow function (deklaracija na funkcija so arrow sintaksa)
const arrowFunction = () => {
    console.log("Ova e arrow function");
}

//arrowFunction();

// Za domasna
// Napisete go svoeto ime i prezime so site 3 tipa na gorenavedenite funkcii

function calculatorIfElse (num1, num2, operation) {
    if (operation === "add") {
        return num1 + num2;
    }
    if (operation === "difference"){
        return num1 - num2;
    }
    if (operation === "multiply"){
        return num1 * num2;
    }
    if (operation === "divide"){
        return num1 / num2;
    }
    else{  
        return "Invalid operation";
    }
}

console.log(calculatorIfElse(10, 5, "add"));
console.log(calculatorIfElse(10, 5, "difference"));
console.log(calculatorIfElse(10, 5, "multiply"));
console.log(calculatorIfElse(10, 5, "divide"));
console.log(calculatorIfElse(10, 5, "logarhitm"));

//Ke go napravime istovo za basic calulator funkcija (+, -, *, /) so switch i case

function calculatorSwitchCase (num1, num2, operation) {
    let result;
    switch (operation) {
        case "add": 
            result = num1 + num2;
            break;
        case "difference":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;     
        default:
            return "Unsupported operation";
    }
    return result;
}

console.log(calculatorSwitchCase(15, 5, "add"));
console.log(calculatorSwitchCase(15, 5, "difference"));
console.log(calculatorSwitchCase(15, 5, "multiply"));
console.log(calculatorSwitchCase(15, 5, "divide"));
console.log(calculatorSwitchCase(15, 5, "logarhitm"));

// Podgotovki za nareden cas (Istrazete i objasnete sto znacat i sto pravat ovie komandi)
// 1. npm init -y
// 2. npm i
// 3. module
//Primer:
var module = require('fs')