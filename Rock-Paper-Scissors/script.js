let mode = document.body.querySelector(".Mode")
let roundNumber = document.body.querySelector(".roundNo")
let winsno = document.body.querySelector(".win_count")
let tiesno = document.body.querySelector(".tie_count")
let losesno = document.body.querySelector(".lose_count")
let playerChoice = document.body.querySelector(".player_choice_name")
let computerChoice = document.body.querySelector(".computer_choice_name")
let sendReaction = document.body.querySelector(".reaction")
let rockButton = document.body.querySelector(".rock")
let paperButton = document.body.querySelector(".paper")
let scissorsButton = document.body.querySelector(".scissors")
let restartButton = document.body.querySelector(".restart")
let playerChoiceIcon = document.body.querySelector(".player_choice_icon")
let computerChoiceIcon = document.body.querySelector(".computer_choice_icon")





let isDark = 1;
let tie = 0;
let win = 0;
let lose = 0;
let roundNum = 1;

function changeMode() {
    if (isDark % 2 != 0) {
        mode.src = "assets/icons/light_mode1.svg";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        rockButton.style.boxShadow = "4px 4px 0px  #8b0000";
        paperButton.style.boxShadow = "4px 4px 0px  #8b0000";
        scissorsButton.style.boxShadow = "4px 4px 0px  #8b0000";
        restartButton.style.boxShadow = "4px 4px 0px  #008b8b";
    }
    else {
        mode.src = "assets/icons/dark_mode1.svg";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        rockButton.style.boxShadow = "4px 4px 0px #000";
        paperButton.style.boxShadow = "4px 4px 0px #000";
        scissorsButton.style.boxShadow = "4px 4px 0px #000";
        restartButton.style.boxShadow = "4px 4px 0px #000";
    }
    isDark++;
}

function getRandomChoice(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

const myChoices = ['Rock', 'Paper', 'Scissors'];

function rock() {
    playerChoiceIcon.style.display = 'block';
    computerChoiceIcon.style.display = 'block';

    const randomChoice = getRandomChoice(myChoices);
    if (randomChoice === "Rock") {
        tie++, roundNum++;
        sendReaction.textContent = "🤝 It's a Tie!"

        sendReaction.classList.remove("reaction");
        void sendReaction.offsetWidth;
        sendReaction.classList.add("reaction");
        sendReaction.className = "reaction tiec";

        sendReaction.style.transform = "scale(1.2)";

        setTimeout(() => {
            sendReaction.style.transform = "scale(1)";
        }, 200);

        playerChoiceIcon.src = "assets/icons/rock_aqua.svg"
        playerChoice.textContent = "Rock"
        computerChoiceIcon.src = "assets/icons/rock_aqua.svg"
        computerChoice.textContent = "Rock"
        tiesno.textContent = tie;
        roundNumber.textContent = roundNum;

    }
    else if (randomChoice === "Paper") {
        lose++, roundNum++;
        sendReaction.textContent = "😢 You Lose!"

        sendReaction.classList.remove("reaction");
        void sendReaction.offsetWidth;
        sendReaction.classList.add("reaction");
        sendReaction.className = "reaction losec";

        sendReaction.style.transform = "scale(1.2)";

        setTimeout(() => {
            sendReaction.style.transform = "scale(1)";
        }, 200);

        playerChoiceIcon.src = "assets/icons/rock_aqua.svg"
        playerChoice.textContent = "Rock"
        computerChoiceIcon.src = "assets/icons/paper_aqua.svg"
        computerChoice.textContent = "Paper"
        losesno.textContent = lose;
        roundNumber.textContent = roundNum;

    }
    else {
        win++, roundNum++;
        sendReaction.textContent = "😊 You Win!"

        sendReaction.classList.remove("reaction");
        void sendReaction.offsetWidth;
        sendReaction.classList.add("reaction");
        sendReaction.className = "reaction winc";

        sendReaction.style.transform = "scale(1.2)";

        setTimeout(() => {
            sendReaction.style.transform = "scale(1)";
        }, 200);

        playerChoiceIcon.src = "assets/icons/rock_aqua.svg"
        playerChoice.textContent = "Rock"
        computerChoiceIcon.src = "assets/icons/hand_aqua.svg"
        computerChoice.textContent = "Scissors"
        winsno.textContent = win;
        roundNumber.textContent = roundNum;

    }
}
function paper() {
    playerChoiceIcon.style.display = 'block';
    computerChoiceIcon.style.display = 'block';

    const randomChoice = getRandomChoice(myChoices);
    if (randomChoice === "Paper") {
        tie++, roundNum++;
        sendReaction.textContent = "🤝 It's a Tie!"

        sendReaction.classList.remove("reaction");
        void sendReaction.offsetWidth;
        sendReaction.classList.add("reaction");
        sendReaction.className = "reaction tiec";

        sendReaction.style.transform = "scale(1.2)";

        setTimeout(() => {
            sendReaction.style.transform = "scale(1)";
        }, 200);

        playerChoiceIcon.src = "assets/icons/paper_aqua.svg"
        playerChoice.textContent = "Paper"
        computerChoiceIcon.src = "assets/icons/paper_aqua.svg"
        computerChoice.textContent = "Paper"
        tiesno.textContent = tie;
        roundNumber.textContent = roundNum;

    }
    else if (randomChoice === "Scissors") {
        lose++, roundNum++;
        sendReaction.textContent = "😢 You Lose!"

        sendReaction.classList.remove("reaction");
        void sendReaction.offsetWidth;
        sendReaction.classList.add("reaction");
        sendReaction.className = "reaction losec";

        sendReaction.style.transform = "scale(1.2)";

        setTimeout(() => {
            sendReaction.style.transform = "scale(1)";
        }, 200);

        playerChoiceIcon.src = "assets/icons/paper_aqua.svg"
        playerChoice.textContent = "Paper"
        computerChoiceIcon.src = "assets/icons/hand_aqua.svg"
        computerChoice.textContent = "Scissors"
        losesno.textContent = lose;
        roundNumber.textContent = roundNum;

    }
    else {
        win++, roundNum++;
        sendReaction.textContent = "😊 You Win!"

        sendReaction.classList.remove("reaction");
        void sendReaction.offsetWidth;
        sendReaction.classList.add("reaction");
        sendReaction.className = "reaction winc";

        sendReaction.style.transform = "scale(1.2)";

        setTimeout(() => {
            sendReaction.style.transform = "scale(1)";
        }, 200);

        playerChoiceIcon.src = "assets/icons/paper_aqua.svg"
        playerChoice.textContent = "Paper"
        computerChoiceIcon.src = "assets/icons/rock_aqua.svg"
        computerChoice.textContent = "Rock"
        winsno.textContent = win;
        roundNumber.textContent = roundNum;

    }
}
function scissors() {
    playerChoiceIcon.style.display = 'block';
    computerChoiceIcon.style.display = 'block';
    
    const randomChoice = getRandomChoice(myChoices);
    if (randomChoice === "Scissors") {
        tie++, roundNum++;
        sendReaction.textContent = "🤝 It's a Tie!"

        sendReaction.classList.remove("reaction");
        void sendReaction.offsetWidth;
        sendReaction.classList.add("reaction");
        sendReaction.className = "reaction tiec";

        sendReaction.style.transform = "scale(1.2)";

        setTimeout(() => {
            sendReaction.style.transform = "scale(1)";
        }, 200);

        playerChoiceIcon.src = "assets/icons/hand_aqua.svg"
        playerChoice.textContent = "Scissors"
        computerChoiceIcon.src = "assets/icons/hand_aqua.svg"
        computerChoice.textContent = "Scissors"
        tiesno.textContent = tie;
        roundNumber.textContent = roundNum;

    }
    else if (randomChoice === "Rock") {
        lose++, roundNum++;
        sendReaction.textContent = "😢 You Lose!"

        sendReaction.classList.remove("reaction");
        void sendReaction.offsetWidth;
        sendReaction.classList.add("reaction");
        sendReaction.className = "reaction losec";

        sendReaction.style.transform = "scale(1.2)";

        setTimeout(() => {
            sendReaction.style.transform = "scale(1)";
        }, 200);

        playerChoiceIcon.src = "assets/icons/hand_aqua.svg"
        playerChoice.textContent = "Scissors"
        computerChoiceIcon.src = "assets/icons/rock_aqua.svg"
        computerChoice.textContent = "Rock"
        losesno.textContent = lose;
        roundNumber.textContent = roundNum;

    }
    else {
        win++, roundNum++;
        sendReaction.textContent = "😊 You Win!"

        sendReaction.classList.remove("reaction");
        void sendReaction.offsetWidth;
        sendReaction.classList.add("reaction");
        sendReaction.className = "reaction winc";

        sendReaction.style.transform = "scale(1.2)";

        setTimeout(() => {
            sendReaction.style.transform = "scale(1)";
        }, 200);

        playerChoiceIcon.src = "assets/icons/hand_aqua.svg"
        playerChoice.textContent = "Scissors"
        computerChoiceIcon.src = "assets/icons/paper_aqua.svg"
        computerChoice.textContent = "Paper"
        winsno.textContent = win;
        roundNumber.textContent = roundNum;

    }
}

function restart() {
    tie = 0;
    win = 0;
    lose = 0;
    roundNum = 1;
    winsno.textContent = win;
    losesno.textContent = lose;
    tiesno.textContent = tie;
    roundNumber.textContent = roundNum;

    playerChoiceIcon.style.display = 'none';
    computerChoiceIcon.style.display = 'none';

    playerChoice.textContent = "Waiting...";
    computerChoice.textContent = "Waiting...";
    sendReaction.textContent = "";
}

rockButton.addEventListener("click", rock);
paperButton.addEventListener("click", paper);
scissorsButton.addEventListener("click", scissors);
restartButton.addEventListener("click", restart)
mode.addEventListener("click", changeMode);