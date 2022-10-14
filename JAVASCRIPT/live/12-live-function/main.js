//alert('ciao')

//console.log(randomNumber);
//const randomNumber = generateRandomNumber (10,40);

/* for (let i = 0; i < 10; i++) {
    const randomNumber = generateRandomNumber (10,40);
    console.log(randomNumber);
}

function generateRandomNumber (min, max){
    return Math.floor(Math.random () * (max - min) ) + min;
} */



/**********************************************************************
Live coding -ESERCIZIO 2
pari o dispari: scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari 
***********************************************************************/

// - modulo per pari dispari (%)
// - (prompt) per scelta numeri
// - (function) per verificare
// - if else


const userNumber = Number(prompt('inserisci un numero'));
console.log(userNumber);

/* function pariDispari (){
    if (userNumber % 2 == 0){
        console.log('il numero è pari');
    } else {
        console.log('il numero è dispari');
    }
}

pariDispari(); */


// assegno un parametro alla function e poi nella dichiarazione della funzione alla riga 50 inserisco il parametro 

/* function pariDispari (number){
    if (number % 2 == 0){
        console.log('il numero è pari');
    } else {
        console.log('il numero è dispari');
    }
}

pariDispari(userNumber); */


// aggiungo il return  - posso togliere l'else perchè il return interrompe il blocco if e il secondo return lo metto al di fuori dell'if

/* function pariDispari(number) {
    if (number % 2 == 0) {
        //console.log('il numero è pari');
        return 'pari'
    }
    return 'dispari';
} */

/* pariDispari(userNumber);
pariDispari(17); */

/* if (pariDispari(userNumber) == 'pari') {
    console.log('hai inserito un numero pari');
} else {
    console.log('hai inserito un numero dispari');
} */



function pariDispari(number) {
    if (number % 2 == 0) {
        //console.log('il numero è pari');
        return 'true';
    }
    return 'false';
}


if (pariDispari(userNumber)) {
    console.log('hai inserito un numero pari');
} else {
    console.log('hai inserito un numero dispari');
}