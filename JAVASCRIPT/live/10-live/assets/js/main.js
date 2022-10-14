/******************************************
 TRACCIA
Live Michele: 
Creiamo un array e poi chiediamo all'utente un numero compreso tra 0 e la lunghezza delle array e poi stampiamo a schermo
******************************************/

// 1 - creiamo una lista array
/* const colorList = [
    'bianco',
    'viola',
    'giallo',
    'rosso',
    'verde',
    'blu',
    'arancione',
]
console.log(colorList);

// 2 - chiediamo all'utente un numero compreso tra 0 e la lunghezza dell'array
const userNumber = prompt('Sceglie un numero tra 0 e ' + colorList.length);
console.log(userNumber);
console.log(colorList[userNumber]);


// 3 - seleziona l'elemento corrispondente al n° scelto dall'utente
colorList [userNumber];
console.log(colorList[userNumber]);

// 4 - aggiungiamo un elemento
colorList.push('indaco', 'grigio', 'nero');
console.log(colorList);
console.log(colorList[userNumber]); */

/*****************************************
TRACCIA 2
stampare tutti gli elementi di un array 
******************************************/

/* const colorList = [
    'bianco',
    'viola',
    'giallo',
    'rosso',
    'verde',
    'blu',
    'arancione',
] */

/* for (let i = 0; i < colorList.length; i++) {
    const colorEl = colorList[i];
    console.log(colorEl);
    // pesca un elemento dal dom
    const colorListoDom = document.querySelector('ul');
    // crea un elemento
    const listItemEl = document.createElement('li');
    // appendo la lista all'elemento
    listItemEl.append(colorEl);
    // appendo l'elemento al dom
    colorListoDom.append(listItemEl);
} */


/* for (let i = 0; i < colorList.length; i++) {
    const colorEl = colorList[i];
    const colorListoDom = document.querySelector('ul');
    console.log(colorEl);
    // creo un list element
    // const colorListoDom = `<li>${colorEl}</li>`;
    // 
    colorListoDom.insertAdjacentElement('beforebegin'), `<li>${colorEl}</li>`;
} */

// da rivedere la seconda soluzione!!


/*****************************************
TRACCIA 3
dato un array di numeri interi, stampare solo i numeri dispari
******************************************/

/* strumenti da utilizzare:
 - const
 - array 
 - ciclo for
 - if statement
 - %
 */

/* const numberList = ['1', '2', '3', '4', '5', '6', '7', '8', '9','10',];

for (i = 0; i < numberList.length; i++){
    const thisNumber = numberList[i];
    //console.log(thisNumber);
    if ( thisNumber % 2 !== 0){
        console.log(thisNumber);
        //stampare a schermo i numeri dispari
        // pesco un elemento dal dom
        const mySquare = document.querySelector('.container');
        //creo un elemento
        const box = document.createElement('div');
        mySquare.append(thisNumber);
        mySquare.append(box);
    }
} */

/* rivedere anche questa che palle */


/*****************************************
 Live 4 
Creiamo una lista di task da fare, stampiamo tutte le task in una lista non ordinate usando insertAdjacentHTML 
*****************************************/

//creare un array salvata dentro una variabile
//insericso lista di task
const tasks = [
    'fare la spesa',
    'pagare le bollette',
    'fare una camminata',
    'fare gli esercizi',
    'committa',
    'pusha',
]

// creo ul in html
// salvo ul in una variabile - query selector
const ulElement = document.querySelector('ul');

//stampare a schermo cle task - ciclo for
for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    // creo elemento li
    // inserisco le task nell'li
    const liElement = `<li>${task}</li>`;
    console.log(liElement);
    // inserisco li in dom - insertAdjacentHTML
    ulElement.insertAdjacentHTML('beforeend', liElement);
}








