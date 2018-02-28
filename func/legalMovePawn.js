var getColumnAndRowFromSquareName = require('./getColumnAndRowFromSquareName');
var getPieceColourFromPosition = require('./getPieceColourFromPosition');
var getPositionPiecePositionFromPiece = require('./getPositionPiecePositionFromPiece');
var squareOccupied = require('./squareOccupied');
var getLesserColumn = require('./getLesserColumn');
var getGreaterColumn = require('./getGreaterColumn');

module.exports = function legalMovePawn(board, from, to) {
    var fromPosition = getColumnAndRowFromSquareName(from);
    var toPosition = getColumnAndRowFromSquareName(to);
    var colour = getPieceColourFromPosition(board, fromPosition);



    // move one forward
    if (
        colour === "White" &&
        toPosition.column === fromPosition.column &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) + 1]
    ) {
        return (!squareOccupied(board, toPosition.column, toPosition.row));
    }
    if (colour === "Black" &&
        toPosition.column === fromPosition.column &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) -1]
    ) {
        return (!squareOccupied(board, toPosition.column, toPosition.row));
    }


    // move two forward
    if (
        colour === "White" &&
        toPosition.column === fromPosition.column &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) + 2]
    ) {
        return (!squareOccupied(board, toPosition.column, toPosition.row) &&
            !squareOccupied(board, toPosition.column, toPosition.row -1));
    }
    if (colour === "Black" &&
        toPosition.column === fromPosition.column &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) -2]
    ) {
        return (!squareOccupied(board, toPosition.column, toPosition.row) &&
            !squareOccupied(board, toPosition.column, toPosition.row));
    }

    // take in lesser column
    if (
        colour === "White" &&
        toPosition.column === getLesserColumn(board,fromPosition.column) &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) + 1]
    )
    {
        return (!squareOccupied(board, toPosition.column, toPosition.row));
    }
    if (colour === "Black" &&
        toPosition.column === getLesserColumn(board,fromPosition.column) &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) -1]
    ) {
        return (!squareOccupied(board, toPosition.column, toPosition.row)) ;
    }

    // take in greater column
    if (
        colour === "White" &&
        toPosition.column === getGreaterColumn(board,fromPosition.column) &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) + 1]
    )
    {
        return (!squareOccupied(board, toPosition.column, toPosition.row));
    }
    if (colour === "Black" &&
        toPosition.column === getGreaterColumn(board,fromPosition.column) &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) -1]
    ) {
        return (!squareOccupied(board, toPosition.column, toPosition.row)) ;
    }

    //wasn't any of the legal moves
    return false;
}