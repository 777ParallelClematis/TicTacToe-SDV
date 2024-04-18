const readlineSync = require('readline-sync'); // Readline is an API that is part of the node.js package

const rl = readline.Interface({ // creates an "instance" of readline - enables it to be used in the rest of the program
    input: process.stdin, // enables input to happen - 
    output: process.stdout // enables output to happen
})
