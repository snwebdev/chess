var getColumnAndRowFromSquareName = require('./getColumnAndRowFromSquareName');
var getPieceColourFromPosition = require('./getPieceColourFromPosition');
var getPositionPiecePositionFromPiece = require('./getPositionPiecePositionFromPiece');
var squareOccupied = require('./squareOccupied');
var getLesserColumn = require('./getLesserColumn');
var getGreaterColumn = require('./getGreaterColumn');

module.exports = function (board, from, to) {

    var fromPosition = getColumnAndRowFromSquareName(from);
    var toPosition = getColumnAndRowFromSquareName(to);
    var colour = getPieceColourFromPosition(board, fromPosition);

    //from and to need to share a column or a row
    if (!(fromPosition.column === toPosition.column ||
            fromPosition.row === toPosition.row)) return -1;

    var squaresToCheck = [];

    //same column greater row
    if(fromPosition.column === toPosition.column &&
    fromPosition.row < toPosition.row){
        var rowToCheck = fromPosition.row +1;
        while (rowToCheck <= toPosition.row){
            squaresToCheck.push({column:fromPosition.column, row:rowToCheck})
            rowToCheck++;
        }
        return(squaresToCheck);
    }




    return "mince";
}