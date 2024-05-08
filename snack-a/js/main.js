'use strict';

//////////////////////////////////////////////////////////

//controllo
let array = [9, 3, 4, 2, 9, 0, 1, 5];

let lunghezzaArray = contaElementi(array);

console.log({lunghezzaArray});

//////////////////////////////////////////////////////////

//FUNZIONE contaElementi()
function contaElementi(arrayInput) {

    let contatore = 0;
    while (arrayInput[contatore] !== undefined) {

        console.log(`Sono arrivato a contare ${contatore + 1} elementi`);
        console.log(arrayInput[contatore]);

        contatore++;
    }

    return contatore;
}

