const choices = document.querySelectorAll(".choice");
const messagePlace = document.querySelector("#msg");
const messageContainer = document.querySelector(".msg-container")

let userScore = 0, compScore = 0;
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

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

// Game Logic
const playGame = (userChoice) => {
    console.log("User's choice =", userChoice);
    const CompChoice = genCompChoice();
    console.log("Computer's choice =", CompChoice);

    showWinner(userChoice, CompChoice);
};
