// need to declare all variables here (or is good practice to at least)
const readlineSync = require('readline-sync'); // 


let board = [ //creating the board as an array, this will later allow me to access each 'cell' by the index functions eg// board [1][2]
[" - ", " - ", " - "],
[" - ", " - ", " - "],
[" - ", " - ", " - "]] 

let row = 0
let col = 0
let currentUser = "X"


// function to reveal the board
 function boardReveal() {
    console.log(board.map(row => row.join ("|")).join("\n------------\n"))// first this joins the rows, and then the columns. escape characters "\n" create a new line in the terminal
 }

 function cellCount(board) {
    let count = 0;
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] !== " - ") {
                count++
            }
        }
    }
    return count
}

 function winCheck() {
    
    
    // Check for vertical wins
    for (let i = 0; i < 3; i++) {
        if ((board[0][i] === board[1][i] && board[1][i] === board[2][i]) && (board[0][i] === " X " || board[0][i] === " O ")) {
            return true // Vertical win found
        }
    }

    // Check for horizontal wins
    for (let i = 0; i < 3; i++) {
        if ((board[i][0] === board[i][1] && board[i][1] === board[i][2]) && (board[i][0] === " X " || board[i][0] === " O ")) {
            return true // Horizontal win found
        }
    }

    // Check for diagonal wins
    if (((board[0][0] === board[1][1] && board[1][1] === board[2][2]) || (board[0][2] === board[1][1] && board[1][1] === board[2][0])) &&
        (board[1][1] === " X " || board[1][1] === " O ")) {
        return true // Diagonal win found
    }

    else {return false} // No win found
}


// function to check the format of user input, after knowing its not "exit" to stop the game. It checks that the input is two numbers (1, 2 or 3) separated by a space. 
function checkFormat(input) {
    var regex = /^(1|2|3)\s(1|2|3)$/
    return regex.test(input)
  }

// function to get user coordinate placement, validate 
function getUserCoordinatePlacement() {
    if (cellCount(board) < 9) {
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
} else { console.log("Its a draw! Try again by entering 'node TicTacToe.js' into your terminal")}
  }


function embark() {
    console.log(" Welcome to  \n T | I | C \n --------- \n T | A | C \n --------- \n T | O | E \n This is a hotseat game, ask a friend to join you or verse yourself \n Exit the game at any time by entering 'exit' into the terminal \n Have fun!")
    boardReveal()
    console.log(currentUser)
    getUserCoordinatePlacement()
}

embark()

// need to add draw condition - if boardisfull return "Its a draw!"
// option to replay if board won 