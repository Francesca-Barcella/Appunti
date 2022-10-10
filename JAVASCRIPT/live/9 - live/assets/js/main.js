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

for (let i=1000; i>=0; i--){
    console.log(i);    
}

const olElement = document.querySelector('ol.elenco');

for (let i=10; i>=20; i--){
    let liElement = `<li class="box_${i}">${i}</li>`;
    olElement.insertAdjacentElement('afterbegin', liElement);
}