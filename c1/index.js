console.log(1);

console.log("run this first");

//Zagradi (brackets)

// () - mali zagradi (za parametri)
// [] - sredni zagradi (za nizi-arrays)
// {} - golemi zagradi (za block scoped) - block vi e se sto imate od '{' do '}'

//Normal/ Basic funtion

function hello(){
    const testArray = [1, 2, 3];
    console.log("Hello World");
}

//Call
hello();

//Reference
var thisISAReferenceToTheFunction = hello();

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

// var, const, let 
// var broj = 1; // promenlivata sme ja deklarirale kako var, megutoa nejziniot tip po vrednost e number

// x = 1 edno ednakvo vo Javascript dodeluva vrednosta 1 na promenlivata x, bez obzira dali e deklarirana so var, const ili let. Razlikata megu niv e vo nivnata funkcionalnost i scope (vidlivost).

// x == y so dve ednakva go sporeduvame x so y, i ako se ednakvi vrakja true, a ako ne se ednakvi vrakja false. Ova e poznato kako "loose equality" (labava ednakvost) i pri toa se pravi konverzija na tipovi ako e potrebno.
//x = 2
//y = "2"
//console.log(x == y) // true, zatoa sto se pravi konverzija na tipovi i stringot "2" se pretvara vo broj 2 pred sporeduvanjeto

// x === y so tri ednakva go sporeduvame x so y, i ako se ednakvi i po vrednost i po tip vrakja true, a ako ne se ednakvi vrakja false. Ova e poznato kako "strict equality" (stroga ednakvost) i pri toa ne se pravi konverzija na tipovi.
x = 2
y = "2"
console.log(x === y)