# correzione form biglietto treno

Lui usa le classi invece dell'ID per i bottuni genera e annulla

//seleziono elementi della domo
Commento utile per iniziare a creare la costanti che estraggo dal dom

- vedi screen 01 per le classi delle const

//recupero i valori degli input
per "pescare" il .value (valore esatto) del tag che otterrò ovviamente dopo il click di genera

screen 05 - sposto la parte "recupero i valori degli input" dentro al listener di click generate per poterli leggere perchè fuori non ci servono, visto che non li legge finchè l'utente non clicca su genera

//stampo in console ... o //stampo a schermo
Si dice stampare quando voglio mostrare i dati in console o a schermo

### usare form in html senza perdere i dati al submit
perchè non ha usato FORM tag per inserire il form: perchè quando clicco su genera/invia i dati verrebbero inviati e quindi sparirebbero. Cosa che non ci è utile per questo esercizio.

SOLUZIONE:
- mettiamo il tag form in html 
- il button genera diventa type submit (che non è più un click ma un invia)
- creo const con query in js per il form
- aggiorno gli eventi in submit e reset per i due button
- aggiungo in sumit lato js e.preventDefault() per evitare il refresh della pagina e dei dati

### tasto annulla (screen 16)
va inserito con type="reset"
nel js vado ad assegnare delle stringhe vuote alle due const
nel js vado a dare una stringa "minorenn" per far apparire il vaolre di default della scelta

### label per nomi fuori dagli input (screen 18)

