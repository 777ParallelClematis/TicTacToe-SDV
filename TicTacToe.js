// need to declare all variables here (or is good practice to at least)
const readlineSync = require('readline-sync'); // Readline is an API that is part of the node.js package


let board = [ //creating the board as an array, this will later allow me to access each 'cell' by the index functions eg// board [1][2]
[" - ", " - ", " - "],
[" - ", " - ", " - "],
[" - ", " - ", " - "]] 
let row = 1
let col = 1
// determining what turn is assigned either X or O. Player X will go first for the first turn. The cycle increments with every valid input. 
 let turn = 0
let currentUser
if (turn % 2 === 0) { 
  currentUser = "X"; 
} else {
  currentUser = "O"; 
}

function isBoardFull() => {
    let 
}

let cellCount = board.

if cell = " - ", cellCount++
else``

if cellCount = 9
// count every element of the array that is not equal to " - "
// pull every element of the array within square brackets that is not equal to " - "
// pull all indexes (rows), and then all col values
// FUNCTIONS 

// function to reveal the board
 function boardReveal() {
    console.log(board.map(row => row.join ("|")).join("\n------------\n"))// first this joins the rows, and then the columns. escape characters "\n" create a new line in the terminal
 }
// function to check if the board is full 
// function isBoardFull () {
//    return board.every(row => row.every(cell => cell !==" - "))
// }
// function to check if there is a winner. Vertically, horizontally and diagonals. Need to adjust these to work with the adjustments I made. 
 function winCheck(board) {
    // check diagonals
if (board[1][1]=== board[2][2] == board[3][3]|| board[3][1] == board[2][2] === board [3][1]) {
    return true
}
 }
// check horizontals
/*if else (board) {
    return true
}
// check verticals
if else 

else {return false}
 }

*/

    // Check verticals
/*for (let i = 0; i < 3; i++) {
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
*/
// function to check the format of user input, after knowing its not "exit" to stop the game. It checks that the input is two numbers (1, 2 or 3) separated by a space. 
function checkFormat(input) {
    var regex = /^(1|2|3)\s(1|2|3)$/
    if (regex.test(input)) {
        return true
    } else {
        return false
    }
}

// function to get user coordinate placement, validate 
function getUserCoordinatePlacement() {
let userInput = readlineSync.question(`Player ${currentUser} Please enter the numeric coordinates of where you/'d like your tile to be placed, separated by a space, eg// 1 2:  `)
 if (userInput.toLowerCase() == "exit") {
    console.log("You exited the game. Try again any time! Remember, enter 'node TicTacToe.js' into your terminal to play again ")
    process.exit(1) // brackets make the process of exiting "true"
 }
 
else if (checkFormat(userInput) == true){
row = userInput.substring(2,3)
col = userInput.substring(0,1)
   row--
   col--
    if (cellIsEmpty = true) {
     board[col][row] = " " + currentUser + " " // the spaces either side of this allow proper spacing on the board
     turn+1
     boardReveal()
     console.log(turn)
     console.log(currentUser)
    } else {
        console.log("This cell is already taken! Try again")
        getUserCoordinatePlacement()
    }
}
getUserCoordinatePlacement()
}
function embark() {
    console.log(" Welcome to  \n T | I | C \n --------- \n T | A | C \n --------- \n T | O | E \n This is a hotseat game, ask a friend to join you or verse yourself \n Have fun!")
    boardReveal()
    getUserCoordinatePlacement()
}

embark()