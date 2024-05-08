'use strict';

//////////////////////////////////////////////////////////

//controllo

let array = [9, 3, 4, 2, 9, 0, 1, 5];
let numeroInput = 5;

let posizione = trovaIndice(array, numeroInput);

console.log({posizione});

//////////////////////////////////////////////////////////

//FUNZIONE trovaIndice()
function trovaIndice(arrayInput, elementoInput) {

    let i = 0;
    let lunghezzaArray = arrayInput.length;
    console.log({lunghezzaArray});
    while (elementoInput !== arrayInput[i] && i < arrayInput.length) {

        console.log(arrayInput[i]);
        console.log({elementoInput});
    
        i++;

    }

    console.log({i});

    if (i < arrayInput.length) return (i + 1)
    if (i == arrayInput.length) return (-1);

}