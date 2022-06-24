//! Consegna

// * Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// *         Attenzione: nella stessa cella può essere posizionata al massimo una bomba,
// *         perciò nell’array delle bombe non potranno esserci due numeri uguali.
// * In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati -
// * abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// * Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// * La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di
// * numeri consentiti(ovvero quando ha rivelato tutte le celle che non sono bombe).
// * Al termine della partita il software deve comunicare il punteggio,
// * cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

//TODO BONUS solo se avete completato la consegna principale con successo:
// ? Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// ? difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// ? difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// ? difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// ! Consigli del giorno: : party_wizard:
// * Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// * Ad esempio:
// * Di cosa ho bisogno per generare i numeri *
// *     Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
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
    startNewGame()
})

function startNewGame() {                 
    cellsWrapper.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        let cellCreatedElement = document.createElement('div');
        cellCreatedElement.classList.add('cell', 'easy');
        cellCreatedElement.innerHTML = [i + 1];
        cellsWrapper.append(cellCreatedElement);
        cellCreatedElement.addEventListener('click', function () {
        cellCreatedElement.classList.add('active');
        console.log('Hai cliccato la cella con il numero' + ' ' + cellCreatedElement.innerHTML);
        })
    }
}

// * Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// *         Attenzione: nella stessa cella può essere posizionata al massimo una bomba,
// *         perciò nell’array delle bombe non potranno esserci due numeri uguali.

// * conoscendo il numero di iterazioni da fare e cioè 16, perché sono 16 i numeri randomici da 1 a 100 che devo generare
// * posso fare un ciclo for che itera per 16 volte per poter generare questi numeri.
// * creare array bombe in cui pushare i risultati usciti dalla fun
// * Finché non trovi un numero che sta già dentro bombe continua a generare numeri

function generateBomb (numList, maxNum, minNum){
    let newBomb;
    let numInList = false;

    while (numInList === false){
        newBomb = Math.floor(Math.random() * (maxNum - minNum) + minNum);
        if(numList.includes(newBomb)){
            numInList === true;
        }
    }
    return newBomb;
}

const bombsBox = []

for (let i = 0; i < 16; i++ ){
    const newBombGeneration = generateBomb(bombsBox, 100, 1);
    bombsBox.push(newBombGeneration)

}
console.log(bombsBox);



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


// function registerEventListener(element) {
//     element.addEventListener('click', function() {
//     element.classList.toggle('active');
//     console.log('Hai cliccato la casella con il numero' + ' ' + element.innerHTML);
//     })
// }