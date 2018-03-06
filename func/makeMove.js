var squareOccupiedByPosition = require('./squareOccupiedByPosition');
var getPieceByPosition = require('./getPieceByPosition');
var getPositionFromSquareName = require('./getPositionFromSquareName');

var piece

module.exports = function makeMove(board, colour, from, to) {
    var fromPosition = getPositionFromSquareName(from);
    var toPosition = getPositionFromSquareName(to);

    if (squareOccupiedByPosition(board, toPosition)) {
        piece = getPieceByPosition(board, toPosition);
        piece.row = -1;
        piece.column = -1;
    }

    piece = getPieceByPosition(board, fromPosition);
    piece.column = toPosition.column;
    piece.row = toPosition.row;


    return (board);
}