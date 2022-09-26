let firstCard = 10
let secondCard = 17
let sum = firstCard + secondCard

if(sum<21){
    console.log("Do You Want to draw a new card?")
}
else if(sum==21){
    console.log("WOHOO! You've got Blackjack!")
}
else if(sum>21){
    console.log("You are out of the game!")
}

