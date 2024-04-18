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
    console.log(board.map(row => row.join (" | ")).join("\n---------\n"))
 }
boardReveal()
rl. close()