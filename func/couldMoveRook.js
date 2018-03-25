var getColumnAndRowFromSquareName = require('./getColumnAndRowFromSquareName');
var getPieceColourFromPosition = require('./getPieceColourFromPosition');
var getPositionPiecePositionFromPiece = require('./getPositionPiecePositionFromPiece');
var squareOccupied = require('./squareOccupied');
var getLesserColumn = require('./getLesserColumn');
var getGreaterColumn = require('./getGreaterColumn');
var getPositionSameColumnGreaterRow = require('./getPositionSameColumnGreaterRow');
var getPositionSameColumnLesserRow = require('./getPositionsSameColumnLesserRow');
var getPositionGreaterColumnSameRow = require('./getPositionGreaterColumnSameRow');
var getPositionLesserColumnSameRow = require('./getPositionLesserColumnSameRow');
var getPositionFromSquareName = require('./getPositionFromSquareName');
var checkSquaresEmptyByPosition = require('./checkSquaresEmptyByPosition');
var getPieceByPosition = require('./getPieceByPosition');
var getPieceByPosition = require('./getPieceByPosition');

module.exports = function (board, colour, from, to) {

    var fromPosition = getColumnAndRowFromSquareName(from);
    var toPosition = getColumnAndRowFromSquareName(to);
    var colour = getPieceColourFromPosition(board, fromPosition);

    //from and to need to share a column or a row
    if (!(fromPosition.column === toPosition.column ||
            fromPosition.row === toPosition.row)) return false;

    var squaresToCheck = [];

    //same column greater row
    if (fromPosition.column === toPosition.column &&
        fromPosition.row < toPosition.row) {
        var position = getPositionSameColumnGreaterRow(board, fromPosition);
        while (position.row !== toPosition.row) {
            squaresToCheck.push(position);
            position = getPositionSameColumnGreaterRow(board, position);
        }
    }

    //same column lesser row
    if (fromPosition.column === toPosition.column &&
        fromPosition.row > toPosition.row) {
        var position = getPositionSameColumnLesserRow(board, fromPosition);
        while (position.row !== toPosition.row) {
            squaresToCheck.push(position);
            position = getPositionSameColumnLesserRow(board, position);
        }
    }

    //greater column same row
    if (fromPosition.column < toPosition.column &&
        fromPosition.row === toPosition.row) {
        var position = getPositionGreaterColumnSameRow(board, fromPosition);
        while (position.column !== toPosition.column) {
            squaresToCheck.push(position);
            position = getPositionGreaterColumnSameRow(board, position);
        }
    }

    //Lesser column same row
    if (fromPosition.column > toPosition.column &&
        fromPosition.row === toPosition.row) {
        var position = getPositionLesserColumnSameRow(board, fromPosition);
        while (position.column !== toPosition.column) {
            squaresToCheck.push(position);
            position = getPositionLesserColumnSameRow(board, position);
        }
    }

    //fails if intervieing squares are occupied
    if (checkSquaresEmptyByPosition(board, squaresToCheck) === false) {
        return false;
    }

    //fails if to square occupied by own piece
    if (squareOccupied(board, toPosition.column, toPosition.row)) {
        var piece = getPieceByPosition(board, toPosition);
        if (piece.colour === colour) return false;
    }



    return true;
}