var getPosition = require('./getColumnAndRowFromSquareName');
var getKnightMovePositions = require('./getKnightMovePositions');
var squareOccupiedByPosition = require('./squareOccupiedByPosition');
var getPieceByPosition = require('./getPieceByPosition');

module.exports = function (board, colour, from, to) {
    var fromPosition = getPosition(from);
    var toPosition = getPosition(to);

    var knightMovePositions = getKnightMovePositions(board, fromPosition);

    

    //is to one of the possible nigtht moves?
    var possible = false;
    for(var i = 0; i < knightMovePositions.length; i++){
        var position = knightMovePositions[i];
        if (position.column === toPosition.column &&
            position.row === toPosition.row){
            possible = true
        }
    }
    if(!possible) return false;


    //is to occupied by own piece
    if(squareOccupiedByPosition(board, toPosition)){
        if(getPieceByPosition(board, toPosition).colour === colour) return false;
    }




    return true;


}