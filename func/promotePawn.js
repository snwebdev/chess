var getPieceByPosition = require('./getPieceByPosition');

module.exports = function(board, pawnPosition, denomination){
    var pawn = getPieceByPosition(board, pawnPosition);
    pawn.column = -1;
    pawn.row = -1;
    pawn.promoted = true;

    board.pieces.push({
        column: pawnPosition.column,
        row: pawnPosition.row,
        colour: "white",
        denomination: denomination
    });

    board.promoDenomination = denomination;

    var text = board.moves;
    for (var i = text.length - 1; i >=0; i--){
        if (text.charAt(i) === " "){
            text = text.slice(0, i) + "=" + denomination.substring(0,1).toUpperCase() + text.slice(i);
            // board.moves = text;
            board.moves += "="+denomination.substring(0,1).toUpperCase();
            return board;
        }
    }


}