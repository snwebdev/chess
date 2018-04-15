var emptyBoard = require('./emptyBoard');
var couldMove = require('./func/couldMove');
var makeMove = require('./func/makeMove');
var randomMove = require('./func/randomMove');
var movePutsMoverInCheck = require('./func/movePutsMoverInCheck');
var legalMove = require('./func/legalMove');
var getLastMoveNumber = require('./func/notate/getLastMoveNumber');
var couldMove = require('./func/couldMove');
var submitMove = require('./func/submitMove');
var isInCheck = require('./func/isInCheck');
var newGame2 = require('./func/newGame2');
console.log("chess");
var canCastleShortWhite = require('./func/canCastleShortWhite');
var canCastleLongWhite = require('./func/canCastleLongWhite');

var initialPositions = require('./initialPositions');

var board = newGame2;

//console.log(makeMove(board,"white", "e1", "c1"))

//board.pieces = initialPositions;


//console.log(getLastMoveNumber(board.moves))
//console.log(legalMove(board, "white", "g4", "g1"));
//console.log(submitMove(board, "white", "d1", "h5"));
//console.log(randomMove(board, "white"));
//console.log(movePutsMoverInCheck(board, "black","g7","g5"));
//console.log(movePutsMoverInCheck(board, "black", "g7", "g5"))
//console.log(isInCheck(board, "black"));
//console.log(canCastleLongWhite(board));

//console.log(board);
console.log(couldMove(board, "black", "c4", "d3"));













