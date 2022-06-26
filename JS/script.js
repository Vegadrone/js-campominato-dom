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

//! ################################## ESERCIZIO ##################################

/* quindi bisogna: fare in modo che la griglia sia generata al momento del click sul bottone
    il che significa che qualsiasi azione andrà messa all'interno di un addeventlistner click
    -creare dinamicamente le celle con una funzione.
    -inserire le celle nell'HTML tramite proprietà append sul parent #cells-wrapper
    - generare un numero progressivo da  0 a 99 o da 1 a 100 tramite ciclo for e inserirlo dentro gli elementi creati magari con una funzione? 
    - con classlist.toggle dare ad ogni cella la possibilità di essere cliccata e poi essere ricliccata per far cambiare colore alla cella*/


//Taking from DOM the start button and the grid-wrapper.
const startGameBtn = document.getElementById('start-game-btn');
const cellsWrapper = document.getElementById('cells-wrapper');

//The game start with this event, all the game logic goes here.
startGameBtn.addEventListener("click", function(){
    startNewGame()
    const bombsBox = [];
    let singleCell;
    const cellsFromDom = document.querySelectorAll('.cell');
    for (let i = 0; i < cellsFromDom.length; i++){
        singleCell = i;
        if(bombsBox.includes(singleCell)){
            alert(bomba)
        }
        
    }
  
        for (let i = 0; i < 16; i++) {
            const bombGeneration = generateBomb(bombsBox, 0, 100);
            bombsBox.push(bombGeneration) 
        }          
    }
)

// START NEW GAME: Generates the cells in the screen and register the click on the cells

function startNewGame() {                 
    cellsWrapper.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        let cellCreatedElement = document.createElement('div');
        cellCreatedElement.classList.add('cell', 'easy');
        cellCreatedElement.innerHTML = '';
        cellsWrapper.append(cellCreatedElement);
        registerClick(cellCreatedElement)
    }
}

// BOMB GENERATION: Generates a numbero of "bombs" between a range set on the difficulty level selection

function generateBomb (numList, minNum, maxNum){
    let newBomb;
    let numInList = false;

    while (numInList === false){
        newBomb = parseInt(Math.floor(Math.random() * (maxNum - minNum) + minNum));
        if(!numList.includes(newBomb)){
            numInList = true;   
        }
    }
    return newBomb;   
}

// CLICK EVENT: Register the click on an element.

function registerClick (element){
    element.addEventListener('click', function () {
    element.classList.add('active');
    console.log('Hai cliccato la cella con il numero');
    })
}




