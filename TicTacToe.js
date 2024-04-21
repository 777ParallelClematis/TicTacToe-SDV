// need to declare all variables here (or is good practice to at least)
const readline = require('readline'); // Readline is an API that is part of the node.js package

const rl = readline.Interface({ // creates an "instance" of readline - enables it to be used in the rest of the program
    input: process.stdin, // enables input to happen - 
    output: process.stdout // enables output to happen
})
 let board = [ //creating the board as an array, this will later allow me to access each 'cell' by the index functions eg// board [1][2]
    [["-"], ["-"], ["-"]],
    [["-"], ["-"], ["-"]],
    [["-"], ["-"], ["-"]], 
 ];

 let currentUser = "X"

// function to reveal the board. 
 function boardReveal() {
    console.log(board.map(row => row.join (" | ")).join("\n---------\n"))// first this joins the rows, and then the columns. 
 }

 function isBoardFull () {
    return board.every(row => row.every(cell => cell !=="-"))
 }

 function winCheck() {
    // Check verticals
for (let i = 0; i < 3; i++) {
if ((board[0][i] === board[1][i] && board[1][i] === board[2][i]) && (board[0][i] === "X" || board[0][i] === "O")) {
return true}
                            }
 
// Check horizontals
for (let i = 0; i < 3; i++) {
if ((board[i][0] === board[i][1] && board[i][1] === board[i][2]) && (board[i][0] === "X" || board[i][0] === "O")) {
return true}
                            }

// Check diagonals
if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] || board[0][2] === board[1][1] && board[1][1] === board[2][0]) &&
    (board[1][1] === "X" || board[1][1] === "O")) {return true}
return false;
}



function getUserCoordinatePlacement() {
rl.question(`${currentUser}, your turn, enter where you'd like your tile to be placed. Numerically in the format (row column), please :  `, (input) => {
    const [row, col] = input.split(" ").map(num => parseInt(num));

    if (isNaN(row) || isNaN(col) || row < 0 || row > 2 || col < 0 || board[row][col] != "-") { // conditions for rejecting user input
console.log("Invalid move, try again. Ensure your coordinates are in the correct format, e.g., 1 2");
getUserCoordinatePlacement();
 } 
    else {// conditions for accepting user input. Where this input goes.
board[row-1][col-1] = currentUser; // adjusting for index vs. shown value offset
boardReveal();
      if (winCheck()) {
console.log("You Win! Play again?");
rl.close();
}    
     else if (isBoardFull()) {
console.log("No winner, it's a draw, Try again");
rl.close();
} 
      else {
currentUser = currentUser === "X" ? "O" : "X";
getUserCoordinatePlacement();
}
}
});
}

function embark() {
    console.log("Welcome to the wonderful world of TIC TAC TOE! \n  Prepare to have your heart set on fire \n as you duel to discover the superior Tic-Tac-Toe-er. \n This is a hotseat game. Either practice by playing by yourself against yourself, or ask a friend to join you. \n Have fun!")
    boardReveal()
    getUserCoordinatePlacement()
}

embark()