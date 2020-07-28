//Variable for the dice Image
let diceImage = document.getElementById("diceImage");
//Variable for the roll button
const button = document.getElementById("button");
//Variable for the score display
let scoreDisplay = document.getElementById("scoreDisplay");
let totalScore = 0;
//Event to reset game
resetButton.addEventListener("click", () => {
    totalScore = 0;
    diceImage.style.visibility = "hidden";
})
//Event to start function to start the game
button.addEventListener("click", () => {
    diceImage.style.visibility = "visible";
    var scoreCount = (assignImage());
    if (scoreCount === 1) {
        totalScore = 0;
    }
    else {
        totalScore = totalScore + scoreCount;
    }
    scoreDisplay.textContent = `${totalScore}`;
    if (totalScore > 19) {
        diceImage.style.backgroundImage = "url(https://i.gifer.com/4SWL.gif)";
        totalScore = 0;
    }
});
let startValue = 0;
//Function to assign image per corresponding dice roll
function assignImage() {
    //Variables for the random numbers
    let numberValue = Math.floor(Math.random() * 6) + 1;
    if (numberValue === 1) {
        diceImage.style.backgroundImage = "url(https://thumbs.gfycat.com/LeftExcitableAfricanaugurbuzzard-size_restricted.gif)";
        alert("YOU ROLLED A 1")
        return numberValue;
    } else if (numberValue === 2) {
        diceImage.style.backgroundImage = "url(img/dice2.png)";
        return numberValue;
    } else if (numberValue === 3) {
        diceImage.style.backgroundImage = "url(img/dice3.png)";
        return numberValue;
    } else if (numberValue === 4) {
        diceImage.style.backgroundImage = "url(img/dice4.png)";
        return numberValue;
    } else if (numberValue === 5) {
        diceImage.style.backgroundImage = "url(img/dice5.png)";
        return numberValue;
    } else if (numberValue === 6) {
        diceImage.style.backgroundImage = "url(img/dice6.png)";
        return numberValue;
    }
}