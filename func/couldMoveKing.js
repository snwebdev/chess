var getPosition = require('./getColumnAndRowFromSquareName');
var getSurroundingPositions = require('./getSurroundingPositions');
var squareOccupiedByPosition = require('./squareOccupiedByPosition');
var getPieceByPosition = require('./getPieceByPosition');
var getPieceBySquareName = require('./getPieceBySquareName');
var squareEmptyBySquareName = require('./squareEmptyBySquareName');

module.exports = function (board, colour, from, to) {
    var fromPosition = getPosition(from);
    var toPosition = getPosition(to);
    var rook, king;


    var surroundingPositions = getSurroundingPositions(board, fromPosition);
    king = getPieceByPosition(board, fromPosition);
    if (to === "g1") rook = getPieceBySquareName(board, "h1");
    if (to === "c1") rook = getPieceBySquareName(board, "a1");
    // if (to == "h8") rook = getPieceByPosition(board, "h8");
    // if (to == "a8") rook = getPieceByPosition(board, "a8");


    //is it castling?
    if (king.colour === "white") {
        if (king.mayYetCastle === true
            && from === "e1"
            && to === "g1"
            && squareEmptyBySquareName(board, "f1")
            && squareEmptyBySquareName(board, "g1")
            && rook.denomination === "rook"
            && rook.colour === "white"
            && rook.mayYetCastle === true
        ) {return true;}
        if (king.mayYetCastle === true
            && from === "e1"
            && to === "c1"
            && squareEmptyBySquareName(board, "b1")
            && squareEmptyBySquareName(board, "c1")
            && squareEmptyBySquareName(board, "d1")
            && rook.denomination === "rook"
            && rook.colour === "white"
            && rook.mayYetCastle === true
        ) {return true;}


    }


    //is to in range?
    var inRange = false;
    for (var i = 0; i < surroundingPositions.length; i++) {
        var position = surroundingPositions[i];
        if (position.column === toPosition.column &&
            position.row === toPosition.row) {
            inRange = true
        }
    }
    if (!inRange) return false;


    //is to occupied by own piece
    if (squareOccupiedByPosition(board, toPosition)) {
        if (getPieceByPosition(board, toPosition).colour === colour) return false;
    }

    //is it placing self in check


    return true;


}