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

const fs = require("fs");
//const {Validator} = require("node-input-validator"); - ova vi e third party module, ne se instalira so obicno npm init -y

const callMeBack = () => { // ova e vasata karticka sto cekate da vi se izraboti
    console.log("Kartikata vi e gotova, dojdete da ja zemete");
}

//callMeBack();

// //callback funkcija - funkcija sto poviuva nekoja druga funkcija
const callbackFunkcija = (functionn) => { // ova e bankata sto koga vasata ke e gotova ve povikuva da si ja zemete
    functionn();
}

callbackFunkcija(callMeBack);