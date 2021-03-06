var getPositionFromSquareName = require('./getPositionFromSquareName');
var couldMove = require('./couldMove');
var getColumnAndRowFromSquareName = require('./getColumnAndRowFromSquareName');

var testBoard = {};


module.exports = function (board, colour, fromPosition, toPosition) {

    // var fromPosition = getPositionFromSquareName(from);
    // var toPosition = getPositionFromSquareName(to);

    testBoard.pieces = [];
    testBoard.rows = board.rows;
    testBoard.columns = board.columns;
    board.pieces.forEach((piece) => {
        var newPiece = {
            colour: piece.colour,
            column: piece.column,
            row: piece.row,
            denomination: piece.denomination
        };
        if (piece.column === fromPosition.column && piece.row === fromPosition.row) {
            newPiece.column = toPosition.column;
            newPiece.row = toPosition.row;


        }
        testBoard.pieces.push(newPiece);
    });

    // var fromPosition = getPositionFromSquareName(from);
    // var toPosition = getPositionFromSquareName(to);

    //get positon of opponents's king
    var kingPosition = {};
    for (var i = 0; i < board.pieces.length; i++) {
        if (board.pieces[i].denomination === "king" &&
            board.pieces[i].colour !== colour) {
            kingPosition = {column: board.pieces[i].column, row: board.pieces[i].row}
        }
    }
    //if king position = from then change to to
    if (kingPosition.column + kingPosition.row === fromPosition.column + fromPosition.row) {
        kingPosition = toPosition;
    }


    for (var i = 0; i < testBoard.pieces.length; i++) {
        var piece = testBoard.pieces[i];
        if (
            piece.colour === colour && piece.row > -1 &&
            // legalMove(testBoard, opColour, piece.column + piece.row, kingPosition.column + kingPosition.row)
            couldMove(testBoard, colour, piece.column + piece.row, kingPosition.column + kingPosition.row)
        ) {
            return true;
        }
    }



    return false;
}
