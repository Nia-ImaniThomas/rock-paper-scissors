//select HTML elemets for use later
let mainElement = document.querySelector("#main")
let resultsElement = document.querySelector("#results")
let graphElement = document.querySelector("#graph")


//need buttons
let rockButton = document.createElement("button")
let paperButton = document.createElement("button")
let scissorsButton = document.createElement("button")

rockButton.append("Rock")
paperButton.append("Paper")
scissorsButton.append("Scissors")

mainElement.append(rockButton,paperButton,scissorsButton)

rockButton.addEventListener("click", playGame)
paperButton.addEventListener("click", playGame)
scissorsButton.addEventListener("click", playGame)

//create a helper function to select a random choice for the computer
let computerChoices = ["Rock", "Paper", "Scissors"]

//Keep count
let resultCounts = [0, 0, 0]


function getComputerChoice () {
    let index = Math.floor(Math.random() * 3)
    resultCounts[index] += 1
    return computerChoices[index]
}

function renderResults() {
    graphElement.innerHTML = ""
    for (let index = 0; index < resultCounts.length; index += 1) {
        const element = resultCounts[index];
        let newDiv = document.createElement("div")
        newDiv.classList.add("resultBox")
        graphElement.append(newDiv)
        newDiv.innerHTML = `The computer has selected ${computerChoices[index]} <p class= "bigNumber"> ${element}</p> times.`;        
    }
}
 
function playGame (event) {
    let playerChioce = event.target.innerText
    let computerChoice = getComputerChoice()
    //console.log(computerChoice)

//tie game
    if (playerChioce === computerChoice) {
        resultsElement.innerText = "It's a draw!"
    }

    /* Jon Taylor:
    six different times 
    because i've got rock versus paper and scissors 
    i've got paper versus scissors and rock 
    and i've got scissors versus paper and rock 
    right so i'm going to have this same thing repeated.
    */

    if (playerChioce === "Rock" && computerChoice === "Scissors") {
        resultsElement.innerText = "Rock beats Scissors, YOU WIN!"
    }

    if (playerChioce === "Rock" && computerChoice === "Paper") {
        resultsElement.innerText = "Rock beats Paper, You'll get em' next time!"
    }

    if (playerChioce === "Paper" && computerChoice === "Scissors") {
        resultsElement.innerText = "Scissors beats paper, You'll get em' next time!"
    }

    if (playerChioce === "Paper" && computerChoice === "Rock") {
        resultsElement.innerText = "Paper beats Rock, YOU WIN!"
    }

    if (playerChioce === "Scissors" && computerChoice === "Rock") {
        resultsElement.innerText = "Rock beats Scissors, You'll get em' next time!"
    }

    if (playerChioce === "Scissors" && computerChoice === "Paper") {
        resultsElement.innerText = "Scissors beats Paper, YOU WIN!"
    }
    
    renderResults()
}


