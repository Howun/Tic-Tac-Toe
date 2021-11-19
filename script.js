//Js concepts and functions to be added:

// Add names to player 1 and player 2
// First make it so when a grid is clicked it starts with an X and places it in the grid.
// Make it so when One is pressed it switches to place the alternate symbol.
// Make it so you are not allowed to overlap a grid that has a symbol placed down.
// Add set of rules so once a row of three of the same symbol has been achieved the player who has placed it down wins.
// Add reset game button
// When reset button pressed, animate a reset to flip all squares to blank

// Additional things that could be added in:
// - A tally for how many wins each player has.
// - Reset button specifically for the counter and tally

let allTiles = document.querySelectorAll(".tiles");
const gameContent = document.querySelector(".gamearea__inner");
const gameStartReset = document.querySelector(".gameStartReset-btn");
let playerTurn = document.querySelector(".playerTurn");

let currentPlayer = "X";
const winTxt = () =>  `Player ${currentPlayer} wins!`;
const drawTxt = () =>  `It's a draw!`;
const playerTurnTxt = () => `It's ${currentPlayer}'s turn`;
playerTurn.innerHTML = playerTurnTxt();

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
		alert("win");
	else if (tile4.innerHTML !== "" && tile4.innerHTML === tile5.innerHTML && tile4.innerHTML === tile6.innerHTML)
		console.log("win");
	else if (tile7.innerHTML !== "" && tile7.innerHTML === tile8.innerHTML && tile7.innerHTML === tile9.innerHTML)
		console.log("win");
	else if (tile1.innerHTML !== "" && tile1.innerHTML === tile4.innerHTML && tile1.innerHTML === tile7.innerHTML)
		console.log("win");
	else if (tile2.innerHTML !== "" && tile2.innerHTML === tile5.innerHTML && tile2.innerHTML === tile8.innerHTML)
		console.log("win");
	else if (tile3.innerHTML !== "" && tile3.innerHTML === tile6.innerHTML && tile3.innerHTML === tile9.innerHTML)
		console.log("win");
	else if (tile1.innerHTML !== "" && tile1.innerHTML === tile5.innerHTML && tile1.innerHTML === tile9.innerHTML)
		console.log("win");
	else if (tile3.innerHTML !== "" && tile3.innerHTML === tile5.innerHTML && tile3.innerHTML === tile7.innerHTML)
		console.log("win");
};


for (let i = 0; i < allTiles.length; i++) {
	const tile = allTiles[i];
	tile.addEventListener("click", () => {

		switch (currentPlayer) {
			case "X":
				tile.innerHTML = currentPlayer;
				currentPlayer = "O";
				winningSolutions();
				break;
			case "O":
				tile.innerHTML = currentPlayer;
				currentPlayer = "X";
				winningSolutions();
				break;
			case tile.innerHTML = "X" || "O":
				break;
		}
	})
};

gameStartReset.addEventListener("click", () => {
	currentPlayer = "X";
	for (let i = 0; i < allTiles.length; i++) {
		const tile = allTiles[i];
		tile.innerHTML = "";
	}
});