'use strict';

//////////////////////////////////////////////////////////

//controllo

let arrayInput = [1, 7, 8, 2, 4, 9, 0];

console.log({arrayInput});

let arrayModificato = rimuoviDallaTesta(arrayInput);

console.log({arrayModificato});

//////////////////////////////////////////////////////////

//FUNZIONE rimuoviDallaTesta()

function rimuoviDallaTesta(arrayA) {

    let arrayB = new Array(arrayA.length - 1);

    for (let i = 1; i < arrayA.length; i++) {

        arrayB[i - 1] = arrayA[i];

    }

    return arrayB;
}