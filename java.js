const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand")
        const computerHand = document.querySelector(".computer-hand")

        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {

                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
               
                compareHands(this.textContent, computerChoice);
                playerHand.src = `images/${this.textContent}.png`;
                computerHand.src = `images/${computerChoice}.png`;

            });
        });
    };

  
    

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p")
        const computerScore = document.querySelector(".computer-score p")
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");

        if (playerChoice === computerChoice){
            winner.textContent = "ITS A DRAW!"
                return;
            }else if (playerChoice === 'paper' && computerChoice === 'rock'){
            winner.textContent = "YOU WIN , PAPER COVERS ROCK!"
                pScore++;
                updateScore();
                return;
            }else if (playerChoice === 'rock' && computerChoice === 'scissors'){
            winner.textContent = "YOU WIN , ROCK CRUSHES SCISSORS!"
                pScore++;
                updateScore();
                return;
            }else if (playerChoice === 'scissors' && computerChoice === 'rock'){
            winner.textContent = "YOU LOSE , ROCK CRUSHES SCISSORS!"
                cScore++;
                updateScore();
                return;
            }else if (playerChoice === 'rock' && computerChoice === 'paper'){
            winner.textContent = "YOU LOSE , PAPER COVERS ROCK!"
                cScore++;
                updateScore();
                return;
            }else if (playerChoice === 'paper' && computerChoice === 'scissors'){
            winner.textContent = "YOU LOSE , SCISSORS SLICE THROUGH PAPER!"
                cScore++;
                updateScore();
                return;
            }else if (playerChoice === 'scissors' && computerChoice === 'paper'){
            winner.textContent = "YOU WIN , SCISSORS SLICE THROUGH PAPER!"
                pScore++;
                updateScore();
                return;
            }
        }
    

/*
        if (playerChoice === computerChoice) {
            winner.textContent = "ITS A DRAW!"
            return;

        }
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "ROCK CRUSHES SCISSORS YOU WIN!"
                pScore++;
                updateScore();
                document.getElementById(playerChoice).classList.add("green-glow");
                return;
            } else {
                winner.textContent = "ROCK COVERS PAPER YOU LOSE!"
                cScore++;
                updateScore();
                return;

            }

        }
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "SCISSORS SLICE THROUGH PAPER,YOU LOSE!";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "PAPER COVERS ROCK , YOU WIN"
                pScore++;
                updateScore();
                return;

            }

        }
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "ROCK CRUSHES SCISSORS,YOU LOSE!"
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "SCISSORS SLICE THROUGH PAPER,YOU WIN!"
                pScore++;
                updateScore();
                return;

            }
        }
    }
*/

startGame();
playMatch();

};
game();
