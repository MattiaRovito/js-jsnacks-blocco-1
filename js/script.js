// Primo esercizio

// Step 1: L’utente inserisce due parole in successione, con due prompt.
 
// Step 2: Il software stampa prima la parola più corta, poi la parola più lunga.

// Step 3: Se uguale lunghezza dire sono uguali e stamparle entrambe.



// var parola1 = prompt('Inserisci la prima parola')
// var parola2 = prompt('Inserisci la seconda parola')

// if (parola1.length > parola2.length){
//     document.getElementById('lunghezza').innerHTML = 'La parola più corta è:' + ' ' + parola2 + '<br>' +  'Mentre la parola più lunga è:' + ' ' + parola1;
// } else if (parola1.length < parola2.length){
//     document.getElementById('lunghezza').innerHTML = 'La parola più corta è:' + ' ' + parola1 + '<br>' +  'Mentre la parola più lunga è:' + ' ' + parola2;
// } else {
//     document.getElementById('lunghezza').innerHTML = 'Le due parole sono uguali';
// }
// console.log(lunghezza)

// -------------------------------------------------------


// Secondo esercizio


// Step 1: Il software deve chiedere per 5 volte all’utente di inserire un numero.
 
// Step 2: Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

// Step 3: Variante: stampare solo i numeri pari 


// Prima versione: usiamo il for


// var somma = 0;

// for(var i = 0; i < 5; i++){
//     numero = parseInt(prompt('Inserisci un numero'));
    // console.log(numero);
    // possiamo scrivere in questo modo
    // somma = somma + numero;
    // versione più 'pulita'
//     somma += numero;    
// } 
// document.getElementById('sommatoria1').innerHTML = somma;
// console.log(somma);


// Seconda versione: usiamo il while

// var somma = 0;
// var i = 0;

// while(i < 5){
//     numero = parseInt(prompt('Inserisci un numero'));
//     somma += numero;
//     i++;
// }
// document.getElementById('sommatoria1').innerHTML = somma;
// console.log(somma);


// Bonus: stampare i numeri pari + sommarli

// for(var i = 0; i < 5; i++){
//     numero = parseInt(prompt('Inserisci un numero'));
//     if (numero % 2 == 0){
//         console.log(numero);
//         document.getElementById('som').innerHTML += ' ' + numero;
//         somma += numero;
//     }
// }
// document.getElementById('sommatoria2').innerHTML = somma;
// console.log(somma);


// -------------------------------------------------------



// Terzo esercizio

// Step 1: Creare un array vuoto.

// Step 2: Chiedere per 6 volte all'utente di inserire un numero.

// Step 3: Se il numero inserito è dispari, inserirlo nell'array.


// var array = []

// for(var i = 0; i < 6; i++){
//     numero = parseInt(prompt('Inserisci un numero'));
//     console.log(numero);
//     if (numero % 2 != 0){
//         array.push(numero);
//     }
// }
// console.log(array);



// -------------------------------------------------------




// Quarto esercizio

// Step 1: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby.

// Step 2: chiedere all'utente il suo nome.

// Step 3: comunicare all'utente se può partecipare o no alla festa.


var array = ['Jay', 'Daisy', 'Nick', 'Tom', 'Mirtle', 'Jordan', 'Meyer'];

var invitato = prompt('Il suo nome, prego');
invitato = invitato.charAt(0).toUpperCase() + invitato.slice(1).toLowerCase();
// console.log(invitato)

var comunicazione = 'L\'invitato' + ' ' + invitato + ' ' + 'non è presente nella lista';

for(var i = 0; i < array.length; i++){
    if (invitato == array[i]){
        comunicazione = 'L\'invitato' + ' ' + invitato + ' ' + 'è presente nella lista';
    }
}
document.getElementById('invito').innerHTML = comunicazione;
