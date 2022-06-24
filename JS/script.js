//! Consegna
// * L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// * Ogni cella ha un numero progressivo, da 1 a 100.
// * Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// * Quando l'utente clicca su ogni cella, la cella cliccata
// * si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//TODO Bonus
// ? Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// ? con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// ? con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// ? con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// ! Consigli del giorno:
// * Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// * Ad esempio: Di cosa ho bisogno per generare i numeri ?
// * Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// * Le validazioni e i controlli possiamo farli anche in un secondo momento.

//! ################################## ESERCIZIO ##################################

/* quindi bisogna: fare in modo che la griglia sia generata al momento del click sul bottone
    il che significa che qualsiasi azione andrà messa all'interno di un addeventlistner click
    -creare dinamicamente le celle con una funzione.
    -inserire le celle nell'HTML tramite proprietà append sul parent #cells-wrapper
    - generare un numero progressivo da  0 a 99 o da 1 a 100 tramite ciclo for e inserirlo dentro gli elementi creati magari con una funzione? 
    - con classlist.toggle dare ad ogni cella la possibilità di essere cliccata e poi essere ricliccata per far cambiare colore alla cella*/

const startGameBtn = document.getElementById('start-game-btn');
const cellsWrapper = document.getElementById('cells-wrapper');

startGameBtn.addEventListener("click", function(){
    // difficultySelection()
    generateCells()
});

function generateCells() {                 
    cellsWrapper.innerHTML = '';
    for (let i = 1; i < 100 + 1; i++) {
        let cellCreatedElement = document.createElement('div');
        cellCreatedElement.classList.add('cell', 'easy');
        cellCreatedElement.innerHTML = [i];
        cellsWrapper.append(cellCreatedElement);
        registerEventListener(cellCreatedElement);

    }
}

// function difficultySelection() {
//     const difficultySelector = document.getElementById('difficulty-level').value;
//     if (difficultySelector === 'Easy'){
//         for (let i = 1; i < 100 + 1; i++) {
//             let cellCreatedElement = document.createElement('div');
//             cellCreatedElement.classList.add('cell', 'easy');
//             cellCreatedElement.innerHTML = [i];
//             cellsWrapper.append(cellCreatedElement);
//             registerEventListener(cellCreatedElement);
//         }
//     }
//     else if (difficultySelector === 'Medium') {
//        for (let i = 1; i < 81 + 1; i++) {
//             let cellCreatedElement = document.createElement('div');
//             cellCreatedElement.classList.remove('easy')
//             cellCreatedElement.classList.add('cell', 'Medium');
//             cellCreatedElement.innerHTML = [i];
//             cellsWrapper.append(cellCreatedElement);
//             registerEventListener(cellCreatedElement);
//         } 
//     } else if (difficultySelector === 'Hard') {
//         for (let i = 1; i < 49 + 1; i++) {
//             let cellCreatedElement = document.createElement('div');
//             cellCreatedElement.classList.add('cell', 'Medium');
//             cellCreatedElement.innerHTML = [i];
//             cellsWrapper.append(cellCreatedElement);
//             registerEventListener(cellCreatedElement);
//         }
//     }
// }


function registerEventListener(element) {
    element.addEventListener('click', function() {
    element.classList.toggle('active');
    console.log('Hai cliccato la casella con il numero' + ' ' + element.innerHTML);
    })
}