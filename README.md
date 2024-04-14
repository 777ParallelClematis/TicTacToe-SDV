# TicTacToe-SDV
This is my TicTacToe project for SDV

**What is TicTacToe**
Tic Tac Toe is a simple two-player game with a 3x3 board. 
One player is assigned to place X's and the other O's. 
Players take turns placing their symbol in attempt to make 3 in a row on the board. 
This can be done horizontally, diagonally or vertically. 
When one of the players makes 3-in-a-row, the player wins and this game is over. 
**Specifics of this game**
This game is played entirely in the terminal, displaying the 3x3 board, its iterations, instructions. 
This game requires the node.js download, as it uses Readline to enable User Input. 
If node is installed, calling the function "node TicTacToe.js" (case sensitive) will cause the game to start. 
This game is played from one file, named TicTacToe.js. 
**Game specifics**
The game will ensure readline is installed. 
I will set variables for me to use in the code. 
I will initiate a 3 x 3 with accessible "cells" - I will do this by creating three arrays within three arrays. 
I will take user inputs by an index system taking X and then Y values. 
NOTE// for my purposes, I must handle Y values before X values so I am working with the vertical value (rows) and then the horizontal value (columns)
X will start, meaning every ODD cycle iteration is player X's turn
O will go second, meaning every EVEN cycle iteration is player X's turn
The game will place the User's X or O according to the users input. 
The grid updates and it is time for the other user to make their turn. 
This repeats until the game is won or drawn (no user can win or place any more markers)
On either case, the game is offered to either be played again or 
**Error checking**
The game does handle errors in user input. It