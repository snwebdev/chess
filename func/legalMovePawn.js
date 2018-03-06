var getColumnAndRowFromSquareName = require('./getColumnAndRowFromSquareName');
var getPieceColourFromPosition = require('./getPieceColourFromPosition');
var getPositionPiecePositionFromPiece = require('./getPositionPiecePositionFromPiece');
var squareOccupied = require('./squareOccupied');
var getLesserColumn = require('./getLesserColumn');
var getGreaterColumn = require('./getGreaterColumn');
var getPieceByPosition = require('./getPieceByPosition');

module.exports = function legalMovePawn(board, colour, from, to) {
    var fromPosition = getColumnAndRowFromSquareName(from);
    var toPosition = getColumnAndRowFromSquareName(to);
    var colour = getPieceColourFromPosition(board, fromPosition);



    // move one forward
    if (
        colour === "white" &&
        toPosition.column === fromPosition.column &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) + 1]
    ) {
        return (!squareOccupied(board, toPosition.column, toPosition.row));
    }
    if (colour === "black" &&
        toPosition.column === fromPosition.column &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) -1]
    ) {
        return (!squareOccupied(board, toPosition.column, toPosition.row));
    }


    // move two forward
    if (
        colour === "white" &&
        toPosition.column === fromPosition.column &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) + 2] &&
        fromPosition.row === "2"
    ) {
        return (!squareOccupied(board, toPosition.column, toPosition.row) &&
            !squareOccupied(board, toPosition.column, toPosition.row -1));
    }
    if (colour === "black" &&
        toPosition.column === fromPosition.column &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) -2] &&
        fromPosition.row === "7"
    ) {
        return (!squareOccupied(board, toPosition.column, toPosition.row) &&
            !squareOccupied(board, toPosition.column, toPosition.row));
    }

    // take in lesser column
    if (
        colour === "white" &&
        toPosition.column === getLesserColumn(board,fromPosition.column) &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) + 1]
    )
    {
        return (getPieceByPosition(board, toPosition).colour === "black");
    }
    if (colour === "black" &&
        toPosition.column === getLesserColumn(board,fromPosition.column) &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) -1]
    ) {
        return (getPieceByPosition(board, toPosition).colour === "white");
    }

    // take in greater column
    if (
        colour === "white" &&
        toPosition.column === getGreaterColumn(board,fromPosition.column) &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) + 1]
    )
    {
        return (getPieceByPosition(board, toPosition).colour === "black");
    }
    if (colour === "black" &&
        toPosition.column === getGreaterColumn(board,fromPosition.column) &&
        toPosition.row === board.rows[board.rows.indexOf(fromPosition.row) -1]
    ) {
        return (getPieceByPosition(board, toPosition).colour === "white");
    }

    //wasn't any of the legal moves
    return false;
}