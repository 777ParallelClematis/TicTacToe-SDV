function checkForReadlineSync() {
  try {require.resolve("readline-sync")
  console.log("Woo hoo! readline sync (part of node.js) is installed, lets get started!")

  } catch (error) {
    console.error ("Uh oh, looks like you don't have readline-sync installed. \nThe game needs this to recieve and interpret your input")
    console.error ("To install readline sync, make sure you have node.js downloaded and then enter the following command in your terminal")
    console.error("npm install readline-sync")
  }
}
checkForReadlineSync()
// necessitating readline sync, the game will not function without this
const readlineSync = require('readline-sync')

// declaring variables
let board = [ //creating the board as an array, this will later allow me to access each 'cell' by the index functions eg// board [1][2]
[" - ", " - ", " - "],
[" - ", " - ", " - "],
[" - ", " - ", " - "]] 
let row = 0
let col = 0
let currentUser = "X" // "default" user is X, this switches later


// main function hoarde 
// function to reveal the board correctly and with margins etc. 
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
// function to check if there is a win on the board
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
const checkFormat = (input) => {
    const regex = /^(1|2|3)\s(1|2|3)$/
    return regex.test(input)
}

// function to get user coordinate placement, validate it, and apply input correctly. has 3 readline-sync questions for the user. 
function getUserCoordinatePlacement() {
    if (cellCount(board) < 9) {
    let userInput = readlineSync.question(`Player ${currentUser} Please enter the numeric coordinates (row then column) of where you'd like your tile to be placed, separated by a space, e.g., 1 2: `)
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
          let winPlayAgain = readlineSync.question(`Player ${currentUser} wins! Play again? `)
          if (winPlayAgain.toLowerCase()=== "yes"){
            embark()
          } else {
            process.exit(1)
          }
        } else {
          currentUser = currentUser === "X" ? "O" : "X"
          getUserCoordinatePlacement()
        }
      } else {
        console.log("This cell is already taken! Try again.")
        getUserCoordinatePlacement()
      }
    } else {
      console.log("Invalid input, try again. Ensure that the format of your answer is numeric, and separated by a space, eg// 2 3.  ")
      getUserCoordinatePlacement()
    }
} else { let replayDraw = readlineSync.question("Its a draw! Play again? (Yes/No)")
if (replayDraw.toLowerCase() === "yes") {
  embark
} else {
  process.exit(1)
}
}
}
// function to embark on the mission of Tic Tac Toe
function embark() {
    console.log(" Welcome to  \n T | I | C \n --------- \n T | A | C \n --------- \n T | O | E \n This is a hotseat game, ask a friend to join you or verse yourself \n Exit the game by entering 'exit' into the terminal when you are prompted to place a tile \n Have fun!")
    boardReveal()
    console.log(currentUser)
    getUserCoordinatePlacement()
}

embark()