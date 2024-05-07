'use strict';

//////////////////////////////////////////////////////////

/*
TRACCIA

Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.

*/

let primoArray = [];
let secondoArray = [];
const primaLunghezza = 7;
const secondaLunghezza = 10;

//RIEMPIRE ARRAY FINO ALLE LUNGHEZZE PRESTABILITE
let i = 0;
while (i < primaLunghezza) {

    let randomNumber = Math.floor(Math.random() * 10);
    primoArray.push(randomNumber);

    i++;

}

i = 0;
while (i < secondaLunghezza) {

    let randomNumber = Math.floor(Math.random() * 10);
    secondoArray.push(randomNumber);

    i++;

}


console.log({primoArray});
console.log({secondoArray});

//AGGIUNGERE ELEMENTI RANDOM FINCHÉ NON SONO UGUALI
if (primoArray.length < secondoArray.length) {

    console.log("Il primo array è più corto del secondo.");

    let i = primoArray.length;
    while (i < secondoArray.length) {

        let randomNumber = Math.floor(Math.random() * 10);
        primoArray.push(randomNumber);

        i++;

    }

    console.log({primoArray});
    console.log({secondoArray});

} else if (secondoArray.length < primoArray.length) {

    console.log("Il secondo array è più corto del primo.");

    let i = secondoArray.length;
    while (i < primoArray.length) {

        let randomNumber = Math.floor(Math.random() * 10);
        secondoArray.push(randomNumber);

        i++;

    }

    console.log({primoArray});
    console.log({secondoArray});

} else {

    console.log("Gli array hanno la stessa dimensione.");

}