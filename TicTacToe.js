// need to declare all variables here (or is good practice to at least)
const readlineSync = require('readline-sync'); // 


let board = [ //creating the board as an array, this will later allow me to access each 'cell' by the index functions eg// board [1][2]
[" - ", " - ", " - "],
[" - ", " - ", " - "],
[" - ", " - ", " - "]] 

let row = 0
let col = 0
let cellCount = 0
let currentUser = "X"

// function to reveal the board
 function boardReveal() {
    console.log(board.map(row => row.join ("|")).join("\n------------\n"))// first this joins the rows, and then the columns. escape characters "\n" create a new line in the terminal
 }

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

function winCheck() {
    // win conditions, placeholder for now
   }
/* let diagWinCheck
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

*/

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
    return regex.test(input)
  }

// function to get user coordinate placement, validate 
function getUserCoordinatePlacement() {
    let userInput = readlineSync.question(`Player ${currentUser} Please enter the numeric coordinates of where you'd like your tile to be placed, separated by a space, e.g., 1 2: `)
    if (userInput.toLowerCase() === "exit") {
      console.log("You exited the game. Try again any time! Remember, enter 'node TicTacToe.js' into your terminal to play again.")
      process.exit(1)
    } else if (checkFormat(userInput)) {
      col = parseInt(userInput.substring(2, 3)) - 1;
      row = parseInt(userInput.substring(0, 1)) - 1;
      if (board[row][col] === " - ") {
        board[row][col] = " " + currentUser + " "
        boardReveal()
        cellCount++
        if (winCheck()) {
          console.log(`${currentUser} Wins!`);
        } else {
          currentUser = currentUser === "X" ? "O" : "X"
          getUserCoordinatePlacement()
        }
      } else {
        console.log("This cell is already taken! Try again.")
        getUserCoordinatePlacement()
      }
    } else {
      console.log("Invalid input, try again.")
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