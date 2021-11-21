//Js concepts and functions to be added:
// Add names to player 1 and player 2
// Make it so you are not allowed to overlap a grid that has a symbol placed down.
// When reset button pressed, animate a reset to flip all squares to blank
// Additional things that could be added in:
// - A tally for how many wins each player has.
// - Reset button specifically for the counter and tally

let allTiles = document.querySelectorAll(".tiles");
const gameStartReset = document.querySelector(".gameStartReset-btn");
let playerTurn = document.querySelector(".playerTurn");
let winningMessage = document.querySelector(".winMessage");

let currentPlayer = "X";
let previousPlayer = "";

const winTxt = () => `Player ${previousPlayer} wins!`;
const drawTxt = () => `It's a draw!`;
const playerTurnTxt = () => `It's ${currentPlayer}'s turn`;


//updates the player's turn
playerTurn.innerHTML = playerTurnTxt();
//function to update the winning message
function winningTxtUpdate() {
	winningMessage.innerHTML = winTxt()
};
//function to update the winningMessage to say you've drawn
function drawTxtUpdate() {
	winningMessage.innerHTML = drawTxt()
};



// When tiles clicked, input the current players tag, set previous player to the player just gone and check if there is a winning grid played
for (let i = 0; i < allTiles.length; i++) {
	const tile = allTiles[i];
	tile.addEventListener("click", () => {
		switch (currentPlayer) {
			case "X":
				tile.innerHTML = currentPlayer;
				currentPlayer = "O";
				previousPlayer = "X";
				playerTurn.innerHTML = playerTurnTxt();
				winningSolutions();
				break;
			case "O":
				tile.innerHTML = currentPlayer;
				currentPlayer = "X";
				previousPlayer = "O";
				playerTurn.innerHTML = playerTurnTxt();
				winningSolutions();
				break;
		};
	});
};

// This restarts the game
gameStartReset.addEventListener("click", () => {
	currentPlayer = "X";
	for (let i = 0; i < allTiles.length; i++) {
		const tile = allTiles[i];
		tile.innerHTML = "";
		winningMessage.innerHTML = "";
	}
});

//sets input to blank and remove who's turn it is
function gameOver() {
	currentPlayer = "";
	playerTurn.innerHTML = "";
}

//win combos
function winningSolutions() {
	const tile1 = document.querySelector(".tile1"),
		tile2 = document.querySelector(".tile2"),
		tile3 = document.querySelector(".tile3"),
		tile4 = document.querySelector(".tile4"),
		tile5 = document.querySelector(".tile5"),
		tile6 = document.querySelector(".tile6"),
		tile7 = document.querySelector(".tile7"),
		tile8 = document.querySelector(".tile8"),
		tile9 = document.querySelector(".tile9");
	if (tile1.innerHTML !== "" && tile1.innerHTML === tile2.innerHTML && tile1.innerHTML === tile3.innerHTML)
		(winningTxtUpdate(), gameOver());
	else if (tile4.innerHTML !== "" && tile4.innerHTML === tile5.innerHTML && tile4.innerHTML === tile6.innerHTML)
		(winningTxtUpdate(), gameOver());
	else if (tile7.innerHTML !== "" && tile7.innerHTML === tile8.innerHTML && tile7.innerHTML === tile9.innerHTML)
		(winningTxtUpdate(), gameOver());
	else if (tile1.innerHTML !== "" && tile1.innerHTML === tile4.innerHTML && tile1.innerHTML === tile7.innerHTML)
		(winningTxtUpdate(), gameOver());
	else if (tile2.innerHTML !== "" && tile2.innerHTML === tile5.innerHTML && tile2.innerHTML === tile8.innerHTML)
		(winningTxtUpdate(), gameOver());
	else if (tile3.innerHTML !== "" && tile3.innerHTML === tile6.innerHTML && tile3.innerHTML === tile9.innerHTML)
		(winningTxtUpdate(), gameOver());
	else if (tile1.innerHTML !== "" && tile1.innerHTML === tile5.innerHTML && tile1.innerHTML === tile9.innerHTML)
		(winningTxtUpdate(), gameOver());
	else if (tile3.innerHTML !== "" && tile3.innerHTML === tile5.innerHTML && tile3.innerHTML === tile7.innerHTML)
		(winningTxtUpdate(), gameOver());
	else if (
		tile1.innerHTML !== "" &&
		tile2.innerHTML !== "" &&
		tile3.innerHTML !== "" &&
		tile4.innerHTML !== "" &&
		tile5.innerHTML !== "" &&
		tile6.innerHTML !== "" &&
		tile7.innerHTML !== "" &&
		tile8.innerHTML !== "" &&
		tile9.innerHTML !== "")
		(drawTxtUpdate(), gameOver());
};

// I know it doesn't look clean haha