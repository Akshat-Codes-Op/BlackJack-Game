function rollDice(){
    let randomNumber = Math.floor(Math.random()*6) + 1;
    return randomNumber;
}

let dice = rollDice();

console.log("The dice shows:- " + dice);

