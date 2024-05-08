'use strict';

//////////////////////////////////////////////////////////

//controllo

let arrayInput = [1, 2, 3, 4, 5];

console.log({arrayInput});

let arrayModificato = rimuoviDallaCoda(arrayInput);

console.log({arrayModificato});

//////////////////////////////////////////////////////////

//FUNZIONE rimuoviDallaCoda()
function rimuoviDallaCoda(arrayA) {

    let arrayB = new Array(arrayA.length - 1);

    for (let i = 0; i < arrayA.length - 1; i++) {

        arrayB[i] = arrayA[i];

    }

    return arrayB;
}