// need to declare all variables here (or is good practice to at least)
const readlineSync = require('readline-sync'); // 


let board = [ //creating the board as an array, this will later allow me to access each 'cell' by the index functions eg// board [1][2]
[" - ", " - ", " - "],
[" - ", " - ", " - "],
[" - ", " - ", " - "]] 
let row = 1
let col = 1
 
let cellCount = 0

for (let row = 0; row < board.length; row++) {
  for (let col = 0; col < board[row].length; col++) {
    if (board[row][col] !== " - ") {
      cellCount++
    }
  }
}
let currentUser
if (cellCount === 1 || cellCount === 3 || cellCount === 5 || cellCount === 7 || cellCount === 9) {
  currentUser = "X"; // Set currentUser to "X" if cellCount is odd
} else {
  currentUser = "O"; // Set currentUser to "O" if cellCount is even
}

console.log(currentUser); // Output: X or O, depending on the value of cellCount


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
/*
if ( (board[0][0] == "X" | "O" && board[1][0]) | 
     (board )
){
    vertWinCheck = true
}

if ( conditions ) {
    horizWinCheck = true
}
*/
let diagWinCheck
if ((board[0][0] === "X" || board[0][0] === "O") &&
    (board[1][1] === "X" || board[1][1] === "O") &&
    (board[2][2] === "X" || board[2][2] === "O") ||
    (board[0][2] === "X" || board[0][2] === "O") &&
    (board[1][1] === "X" || board[1][1] === "O") &&
    (board[2][0] === "X" || board[2][0] === "O")) {
    diagWinCheck = true
} else {
    diagWinCheck = false
}

if (diagWinCheck) {
    winCheck = true
} else {
    winCheck = false
}



 // winCheck is true if vertical or horizontal or diagonal values winCheck is true
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
    process.exit(1) // bracket value makes the process of exiting "true"
 }
 
else if (checkFormat(userInput) == true){
row = userInput.substring(2,3)
col = userInput.substring(0,1)
   row--
   col--
    if (cellIsEmpty = true) {
     board[col][row] = " " + currentUser + " " // the spaces either side of this allow proper spacing on the board
     boardReveal()
     console.log(cellCount)
     console.log(currentUser)
     if (winCheck == true){ 
        console.log(`${currentUser} Wins!`)}
        else {
            boardReveal()
            console.log(cellCount)
            console.log(currentUser)
            console.log(cellCount)
            console.log(currentUser)
            getUserCoordinatePlacement()
     }
    } else {
        console.log("This cell is already taken! Try again")
        getUserCoordinatePlacement()
        console.log(cellCount)
        console.log(currentUser)
    }
} 
else {
    console.log("Invalid input, try again")
    getUserCoordinatePlacement()
}
}
function embark() {
    console.log(" Welcome to  \n T | I | C \n --------- \n T | A | C \n --------- \n T | O | E \n This is a hotseat game, ask a friend to join you or verse yourself \n Exit the game at any time by entering 'exit' into the terminal \n Have fun!")
    boardReveal()
    console.log(cellCount)
    console.log(currentUser)
    getUserCoordinatePlacement()
}

embark()