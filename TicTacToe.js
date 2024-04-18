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
// function to reveal the board. 
 function boardReveal() {
    console.log(board.map(row => row.join (" | ")).join("\n---------\n"))// first this joins the rows, and then the columns. 
 }
//boardReveal() // for testing as I go
//rl. close() // for testing as I go

function embark() {
    console.log("Welcome to the wonderful world of TIC TAC TOE! \n  Prepare to have your heart set on fire \n as you duel to discover the superior Tic-Tac-Toe-er. \n This is a hotseat game. Either practice by playing by yourself against yourself, or ask a friend to join you. \n Have fun!")
    boardReveal()
    getUserCoordinatePlacement()
}


function getUserCoordinatePlacement() {
    rl.question(`${currentUser}, your turn, enter where you'd like your tile to be placed. Numerically in the format (row column), please`), (input) => {
        const [row, col] = input.splice(" ").map(num => parseInt(num))

if (isNaN(row) | isNaN(col)) // conditions for rejecting user input
    } else { // conditions for accepting user input. Where this input goes. 
        board[row][column] = currentUser
        boardReveal()
        if(winCheck()) {
            console.log("You Win! Play again?")
            rl.close()
        } else if (fullBoard()) {
            console.log ("No winner, its a draw, Try again")
        }
}
}

