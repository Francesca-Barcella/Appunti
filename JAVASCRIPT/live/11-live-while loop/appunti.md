# LE FUNZIONI
ci servono per evitare di riscrivere ogni volta il testo

#### SINTASSI
nelle (parentesi) posso mettere dei parametri o lasciarle vuote

function nameOfmyFunction () {
    //blocco di codice
}

function nameOfmyFunction (params) {
    //blocco di codice
}

function nameOfmyFunction (param1, param2, param3) {
    //blocco di codice
}

### function senza dati in ingresso
function sayHello () {
    alert ('hello!')
}

### function con dati in ingresso
function sumNumbers (num1, num2) {
    const  sum = num1 + num2
    alert (sum)
}

si attiverà e darà risultato ovviamente quando i parametri riceveranno dei dati.

### nuova keword = return
ci serve per farci restituire un risultato e con lei si termina la funzione e  ne suciamo, quindi il codice dopo (all'interno della funzione ovviametne) non verrà più letto ed eseguto.

function sumNumbers (num1, num2) {
    const  sum = num1 + num2
    return = sum
}

### invocare una function
- la funzione può essere richiamata dove e quante volte vogliamo (per farla stampare in console o in dom a seconda delle necessità)
- SCREENSHOT 01 - 02 - 03 


le variabili create dentro una function non vengono lette ad al difuori, servono solo per conservare i dati finchè non vengono richiamati in qualche modo esternamente (tramite la creazione di un'altra variabile al di fuori della funzione)

