var emptyBoard = require('./emptyBoard');
var legalMove = require('./func/legalMove');
var makeMove = require('./func/makeMove');
var randomMove = require('./func/randomMove');
console.log("chess");

var initialPositions = require('./initialPositions');

var board = emptyBoard;
board.pieces = initialPositions;
// board.pieces = [
//     {
//         row: "3",
//         column: "E",
//         colour: "White",
//         denomination: "King",
//         castled: false
//     }
// ]


//console.log(legalMove(board, "white", "a1", "b1"));
//console.log(makeMove(board, "white", "e2", "f3"));
console.log(randomMove(board, "white"));

//console.log(board);













