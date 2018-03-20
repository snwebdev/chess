var squareOccupiedByPosition = require('./squareOccupiedByPosition');
var getPieceByPosition = require('./getPieceByPosition');
var getPositionFromSquareName = require('./getPositionFromSquareName');
var notateMove = require('./notateMove');



var piece;

module.exports = function makeMove(board, colour, from, to) {
    var fromPosition = getPositionFromSquareName(from);
    var toPosition = getPositionFromSquareName(to);


    if (squareOccupiedByPosition(board, toPosition)) {
        piece = getPieceByPosition(board, toPosition);
        piece.row = -1;
        piece.column = -1;
    }

    piece = getPieceByPosition(board, fromPosition);
    notateMove(board, fromPosition, toPosition);

    //board.moves += notatedMove;
    console.log(board.moves);
    piece.column = toPosition.column;
    piece.row = toPosition.row;

//console.log("makemove board="+JSON.stringify(board));

    //tell the display which square to empty
    board.empty = fromPosition;

    return (board);
}