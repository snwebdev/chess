var emptyBoard = require('./emptyBoard');
var couldMove = require('./func/couldMove');
var makeMove = require('./func/makeMove');
var randomMove = require('./func/randomMove');
var movePutsMoverInCheck = require('./func/movePutsMoverInCheck');
var legalMove = require('./func/legalMove');
var getLastMoveNumber = require('./func/notate/getLastMoveNumber');
console.log("chess");

var initialPositions = require('./initialPositions');

var board = emptyBoard;
//board.pieces = initialPositions;
board.moves = "1. a3 e6";
board.pieces = [
    {
        row: "1",
        column: "a",
        colour: "white",
        denomination: "king",
        castled: false
    },
    {
        row: "1",
        column: "b",
        colour: "white",
        denomination: "rook",
        castled: false
    },{
        row: "1",
        column: "h",
        colour: "black",
        denomination: "queen",
        castled: false
    }
]

console.log(getLastMoveNumber(board.moves))
//console.log(legalMove(board, "white", "b1", "c1"));
//console.log(makeMove(board, "white", "e2", "f3"));
//console.log(randomMove(board, "white"));
//console.log(movePutsMoverInCheck(board, "white","b1","c1"));

//console.log(board);













