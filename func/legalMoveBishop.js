var getDiagonalPositionsBetween = require('./getDiagonalPositionsBetween');
var getColumnAndRowFromSquareName = require('./getColumnAndRowFromSquareName');
var getPieceColourFromPosition = require('./getPieceColourFromPosition');
var getPositionPiecePositionFromPiece = require('./getPositionPiecePositionFromPiece');
var  getUpDiagonalsFromPosition = require('./getUpDiagonalsFromPosition');
var  getDownDiagonalsFromPosition = require('./getDownDiagonalsFromPosition');
var  getDiagonalPositionsBetween = require('./getDiagonalPositionsBetween');
var squaresOccupiedByPositions = require('./squaresOccupiedByPositions');
var squareOccupiedByPosition = require('./squareOccupiedByPosition');
var getPieceByPosition = require('./getPieceByPosition');

module.exports = function legalMoveBishop(board, colour, from, to) {
    var fromPosition = getColumnAndRowFromSquareName(from);
    var toPosition = getColumnAndRowFromSquareName(to);
    var colour = getPieceColourFromPosition(board, fromPosition);



    var up = getUpDiagonalsFromPosition(board,fromPosition);
    var down = getDownDiagonalsFromPosition(board,fromPosition);

    var found = false;

    //are from and to on a diagonal
    for (var i = 0; i < up.length; i++) {
        if(up[i].column === toPosition.column && up[i].row === toPosition.row) found = true;
    }

    for (var i = 0; i < down.length; i++) {
        if(down[i].column === toPosition.column && down[i].row === toPosition.row) found = true;
    }
    if(!found) return false;

    //anything inbetween
    var between = getDiagonalPositionsBetween(board, fromPosition, toPosition);
    if(squaresOccupiedByPositions(board, between)) return false;

    //target occupied by own piece
    if(squareOccupiedByPosition(board, toPosition) &&
    getPieceByPosition(board, toPosition).colour === colour){
        return false;
    }


    return true


}