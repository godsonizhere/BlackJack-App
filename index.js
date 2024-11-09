cards = []
let sum = 0
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
isAlive = false
hasBlackJack = false


let player = {
    name: "Players Balance",
    chips: 5
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + "$" + player.chips




function getRandomCard() {
     
    let randomCard = Math.floor(Math.random() * 13) + 1 
    if (randomCard > 10) { 
        return 10 
    }else if (randomCard === 1 ) {
        return 11
    } else {
        return randomCard
    }

}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
     
    if (sum <= 20) {
        message = "Do you want to draw a new Card" 
        isAlive = true
        hasBlackJack = false

        
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        isAlive = true
        player.chips += 50
        playerEl.textContent = player.name + ": " + "$" + player.chips
    } else {
        message = "You're out of the game!" 
        isAlive = false
        hasBlackJack = false
    }
    console.log(message)

    messageEl.textContent = message
}


function thirdCard() {
    
        if ( player.chips && isAlive && !hasBlackJack) {
            let card = getRandomCard()
            sum +=  card
            cards.push(card)
            player.chips -= 2
            playerEl.textContent = player.name + ": " + "$" + player.chips
            renderGame()
        } else {
            message = "You don't have enough chips to draw a new card!"
        }

    
}



