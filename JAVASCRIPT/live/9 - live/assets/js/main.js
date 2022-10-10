// stampare in console tutti i numeri da 0 fino 1000

/* #region 1° live 

const ulElement = document.querySelector ('ul');

for (let i=0; i < 1001; i++){
    console.log(i);
    //prendo l'elemento della DOM selezionato (UL)
    //inserisco un li al suo interno 
    // metto la variabili i all'interno di li
    ulElement.innerHTML += `<li> ${i} </li>`
}

*/

/* #region 2° live 
for (let i=1000; i>=0; i--){
    console.log(i);    
}

const olElement = document.querySelector('ol.elenco');

for (let i=10; i>=20; i--){
    let liElement = `<li class="box box_${i}">${i}</li>`;
    olElement.insertAdjacentHTML('afterbegin', liElement);
}
*/

// #region 3° live 
const ulElement3 = document.querySelector('.ul_3');

for (let i=25; i<=50; i++){
    console.log(i);
    //creare li utilizzando document.create
    const li = document.createElement('li');
    //appendo a li la variabile i
    li.append(i);
    //appendo li a ul
    ulElement3.append(li);
}


