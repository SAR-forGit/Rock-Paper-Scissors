const choices = document.querySelectorAll(".choice");
const messagePlace = document.querySelector("#msg");
const messageContainer = document.querySelector(".msg-container")

let userScore = 0, compScore = 0;
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const humanHand = document.querySelector("#Human-hand");
const compHand = document.querySelector("#Comp-hand");


// To Generate computer choice:
const genCompChoice = () => {
    const opts = ["Rock", "Paper", "Scissors"];
    const randindex = Math.floor(Math.random() * 3);
    return opts[randindex];
};

// User's Choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Winner Deciding logic:
const showWinner = (userChoice, CompChoice) => {
    var userWin = true;
    if (userChoice === "Rock") {
        userWin = CompChoice === "Paper" ? false : true;
    }
    else if (userChoice === "Paper") {
        userWin = CompChoice === "Scissors" ? false : true;
    }
    else {
        userWin = CompChoice === "Rock" ? false : true;
    }

    if (userChoice === CompChoice) {
        console.log("The game is a draw!");
        messagePlace.innerHTML = ("The game is a draw!")
        messageContainer.style.backgroundColor = "#ABAB98"
    }
    else if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        messagePlace.innerHTML = (`You Win! Your ${userChoice} beats ${CompChoice}`);
        messageContainer.style.backgroundColor = "#87A96B"

    }
    else{
        console.log("You Lose!");
        compScore++;
        compScorePara.innerText = compScore;
        messagePlace.innerHTML = (`You Lose! ${CompChoice} beats Your ${userChoice}`);
        messageContainer.style.backgroundColor = "#fd5c63"
    }
}

// Human hand animation
const HumanHand = (userChoice) => {
    const HumanHandAnimation = document.querySelector("#rockhand-human");
    if (userChoice === "Rock"){
        humanHand.src = "./Rock, paper, scissors/rock-hand.png"
        HumanHandAnimation.style.animationDuration = "0s";
        setTimeout(() => {
            humanHand.src = "./Rock, paper, scissors/rock-hand.png"
            HumanHandAnimation.style.animationDuration = "4s";
        }, 2000);
    }
    else if (userChoice === "Paper"){
        humanHand.src = "./Rock, paper, scissors/paper-hand.png"
        HumanHandAnimation.style.animationDuration = "0s";
        setTimeout(() => {
            humanHand.src = "./Rock, paper, scissors/rock-hand.png"
            HumanHandAnimation.style.animationDuration = "4s";
        }, 2000);
    }
    else if (userChoice === "Scissors"){
        humanHand.src = "./Rock, paper, scissors/scissors-hand.png"
        HumanHandAnimation.style.animationDuration = "0s";
        setTimeout(() => {
            humanHand.src = "./Rock, paper, scissors/rock-hand.png"
            HumanHandAnimation.style.animationDuration = "4s";
        }, 2000);
    }
}

// Computer Hand Animation
const CompHand = (CompChoice) => {
    const CompHandAnimation = document.querySelector("#rockhand-comp");

    if (CompChoice === "Rock"){
        compHand.src = "./Rock, paper, scissors/robotHandRock.png"
        CompHandAnimation.style.animationDuration = "0s";
        setTimeout(() => {
            compHand.src = "./Rock, paper, scissors/robotHandRock.png"
            CompHandAnimation.style.animationDuration = "4s";
        }, 2000);
    }

    else if (CompChoice === "Paper"){
        compHand.src = "./Rock, paper, scissors/robotHandPaper.png"
        CompHandAnimation.style.animationDuration = "0s";
        setTimeout(() => {
            compHand.src = "./Rock, paper, scissors/robotHandRock.png"
            CompHandAnimation.style.animationDuration = "4s";
        }, 2000);
    }

    else if (CompChoice === "Scissors"){
        compHand.src = "./Rock, paper, scissors/robotHandScissors.png"
        CompHandAnimation.style.animationDuration = "0s";
        setTimeout(() => {
            compHand.src = "./Rock, paper, scissors/robotHandRock.png"
            CompHandAnimation.style.animationDuration = "4s";
        }, 2000);
    }
}

// Game Logic
const playGame = (userChoice) => {
    console.log("User's choice =", userChoice);
    const CompChoice = genCompChoice();
    console.log("Computer's choice =", CompChoice);

    showWinner(userChoice, CompChoice);
    HumanHand(userChoice);
    CompHand(CompChoice);
};

var preloader = document.getElementById("pre-loader")
var loader = document.getElementsByClassName("loader")

window.addEventListener ("load", () => {
    preloader.style.display = "none";
    loader.style.display = "none";
})