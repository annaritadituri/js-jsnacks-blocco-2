'use strict';

//////////////////////////////////////////////////////////

//controllo

let array = [1, 5, 7, 8];

let stampaStringa = stampa(array);

console.log({stampaStringa});

//////////////////////////////////////////////////////////

//FUNZIONE stampa()
function stampa(arrayInput) {

    let stringa = "";

    for (let i = 0; i < arrayInput.length; i++) {

        if (i === arrayInput.length - 1) {
            stringa += `${arrayInput[i]}`;
        } else {
            stringa += `${arrayInput[i]}, `;
        }

    }

    return stringa;
}