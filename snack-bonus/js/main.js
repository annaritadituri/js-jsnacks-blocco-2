'use strict';

//////////////////////////////////////////////////////////

//controllo

let arrayInput = [1, 2, 3, 4, 5, 6, 7];
let elementoInput = 9;

console.log({arrayInput});

let arrayModificato = inserisciInTesta(arrayInput, elementoInput);

console.log({arrayModificato});


//////////////////////////////////////////////////////////

//FUNZIONE inserisciInTesta()

function inserisciInTesta(arrayA, elementoE) {

    let arrayB = [elementoE];

    for (let i = 1; i < arrayA.length + 1; i++) {

        arrayB[i] = arrayA[i - 1];

    }

    return arrayB;
}