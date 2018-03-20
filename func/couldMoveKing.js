var getPosition = require('./getColumnAndRowFromSquareName');
var getSurroundingPositions = require('./getSurroundingPositions');
var squareOccupiedByPosition = require('./squareOccupiedByPosition');
var getPieceByPosition = require('./getPieceByPosition');

module.exports = function (board, colour, from, to) {
    var fromPosition = getPosition(from);
    var toPosition = getPosition(to);

    var surroundingPositions = getSurroundingPositions(board, fromPosition);

    //is it castling?


    //is to in range?
    var inRange = false;
    for(var i = 0; i < surroundingPositions.length; i++){
        var position = surroundingPositions[i];
        if (position.column === toPosition.column &&
        position.row === toPosition.row){
            inRange = true
        }
    }
    if(!inRange) return false;


    //is to occupied by own piece
    if(squareOccupiedByPosition(board, toPosition)){
        if(getPieceByPosition(board, toPosition).colour === colour) return false;
    }

    //is it placing self in check


    return true;


}