// This is the source code for the guessing game


// Code to handle credits for the game. Let's assume it is 10

function getGameCredz() {

    function add() {
        let userNum = document.getElementById("numCredits").value;

        if(userNum <= 10 && userNum > 0) {
            alert(`User now has ${userNum} credit(s) to spend.`);
        }
        else alert(`Please enter a number between 1 and 10.`)
    }

    document.getElementById("addCreds").addEventListener("click", add)
}

let gameCredz = getGameCredz();

while(gameCredz > 0){
    // The computer generates a random number between 1 and 100

    function getCpuGuess(min, max) {

    let cpuGuess = Math.floor( Math.random() * max ) + min;
        return cpuGuess;

    }

    // The user chooses a number from the interface. For example, 50

    function getUserGuess() {

        function submitGuess() {
            let guess = document.getElementById("guessNum").value;

            if ( gameCredz < 1 ) {
                alert(`Please add credits before starting the game!`)
            } else if ( guess < 1 || guess > 100 ) {
                alert(`Please enter a number between 1 and 100.`)
            } else return guess;
        }

        document.getElementById("takeGuess").addEventListener("click", submitGuess)

    }

    // compare cpu-generated number with user input
    let gameResult = "";

    let cpuGuess = getCpuGuess(1,100)

    let userGuess = getUserGuess();

    if (cpuGuess < userGuess) {
        gameResult = "The computer chose a lower number. Try again.";
        gameCredz--
    } else if (cpuGuess > userGuess) {
        gameResult = "The computer chose a higher number. Try again.";
        gameCredz--
    } else gameResult = "🎆 Congratulations! You won! 🎆";

    document.getElementById("guess_result").textContent = gameResult;

    document.getElementById("guess_result").textContent = "Game Over! The CPU number was " + cpuGuess;
}
