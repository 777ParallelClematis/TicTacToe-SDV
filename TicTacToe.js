// need to declare all variables here (or is good practice to at least)
const readline = require('readline'); // Readline is an API that is part of the node.js package

const rl = readline.createInterface({ // creates an "instance" of readline - enables it to be used in the rest of the program for collecting user inputs 
    input: process.stdin, // enables input to happen - 
    output: process.stdout // enables output to happen
})
let board = [ //creating the board as an array, this will later allow me to access each 'cell' by the index functions eg// board [1][2]
["-", "-", "-"],
["-", "-", "-"],
["-", "-", "-"]] 

 let turn = 0
// FUNCTIONS 

// function to reveal the board
 function boardReveal() {
    console.log(board.map(row => row.join (" | ")).join("\n---------\n"))// first this joins the rows, and then the columns. escape c
 }

 function isBoardFull () {
    return board.every(row => row.every(cell => cell !==" - "))
 }
// function to check if there is a winner. Vertically, horizontally and diagonals
 function winCheck() {
    // Check verticals
for (let i = 0; i < 3; i++) {
if ((board[0][i] === board[1][i] && board[1][i] === board[2][i]) && (board[0][i] === "X" || board[0][i] === "O")) {
return false}
                            }
 
// Check horizontals
for (let i = 0; i < 3; i++) {
if ((board[i][0] === board[i][1] && board[i][1] === board[i][2]) && (board[i][0] === "X" || board[i][0] === "O")) {
return false}
                            }

// Check diagonals
if ((board[0][0] === board[1][1] && board[1][1] === board[2][2] || board[0][2] === board[1][1] && board[1][1] === board[2][0]) &&
    (board[1][1] === "X" || board[1][1] === "O")) {return true}
return false;
}


// function to get user coordinate placement, validate 
function getUserCoordinatePlacement() {
rl.question(`${currentUser}, your turn, enter where you'd like your tile to be placed. Numerically in the format (row column), please :  `, (input) => {
    const [row, col] = input.split(" ").map(num => parseInt(num));
if ("stop"||"exit") { 
    console.log("You exited the game. Try again any time! Remember, enter 'node TicTacToe.js' into your terminal to play again ")
    process.exit(0)
}
    if (isNaN(row) || isNaN(col) || row < 0 || row > 2 || col < 0 || col >2) { // conditions for rejecting user input
console.log("Invalid move, try again. Ensure your coordinates are in the correct format, e.g// 1 2");
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
// monkey business
getUserCoordinatePlacement();
}
}
});
}

function embark() {
    console.log(" Welcome to  \n T | I | C \n --------- \n T | A | C \n --------- \n T | O | E \n This is a hotseat game, ask a friend to join you or verse yourself \n Have fun!")
    boardReveal()
    getUserCoordinatePlacement()
}

embark()