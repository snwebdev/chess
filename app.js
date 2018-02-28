var emptyBoard = require('./emptyBoard');
var legalMove = require('./func/legalMove');
console.log("chess");

var initialPositions = require('./initialPositions');

var board = emptyBoard;
board.pieces = initialPositions;

console.log(legalMove(board, "White", "A4", "A7"));

//console.log(board);













