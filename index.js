
//Ensure the casino does not randomly choose cards before starting game
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

function resetCards(){
    cardsReset = document.getElementById("playerCards");
    cardsReset =[];
    sumReset = document.getElementById("total");
    sumReset = 0;
    hasBlackJack = false;
    isAlive = false;
    message = "";
}



let messageAsk = document.getElementById("message-ask");
let sumTotal = document.getElementById("total");
let cardsOwned = document.getElementById("playerCards");

let player = {
    name: "Sophie",
    chips: 145
};

let playerEl = document.getElementById("playerDetails");
playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard(){
    
    let randomNumber = Math.floor(Math.random()* 13) + 1;

    if (randomNumber > 10){
        return 10;
    }else if (randomNumber === 1){
        return 11;
    }else{
        return randomNumber;
    }
}


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}


function renderGame(){
    
    cardsOwned.textContent = "Cards: "
    for (let i=0; i<cards.length; i++){
        playerCards.textContent += cards[i] + " ";
    }
    sumTotal.textContent = "Sum: " + sum;
    if (sum <= 20){
        message = "Do you want to draw a new card?🤔";
        isAlive = true;
    }else if (sum === 21){
        message = "Wohoo! You've got Blackjack!🥳";
        hasBlackJack = true;
        isAlive = true;
    }else{
        message = "You're out of the game!😔";
        isAlive = false;
    }
    messageAsk.textContent = message;
    
}

function newCard(){

    if (isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard();
        sum += thirdCard;
        cards.push(thirdCard);
        renderGame();

    }
    
    
}


