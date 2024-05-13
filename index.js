
//Ensure the casino does not randomly choose cards before starting game
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

function resetCards(){
    let currentCards = document.getElementById("playerCards");
    currentCards.textContent = "Cards: ";

    let currentSum = document.getElementById("total");
    currentSum.textContent = "Sum: "

    let displayMessage = document.getElementById("message-ask");
    displayMessage.textContent = "Another game? You know what to do...";

}


let player = {
    name: "Sophie",
    chips: 145
};

    let messageAsk = document.getElementById("message-ask");
    let sumTotal = document.getElementById("total");
    let cardsOwned = document.getElementById("playerCards");

    let playerEl = document.getElementById("playerDetails");
    playerEl.textContent = player.name + ": $" + player.chips;



function getRandomCard(){
    
    let randomNumber = Math.floor(Math.random()* 13) + 1;


    //Changing Ace to just 11, and Jack, Queen and King to be worth 10.
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


