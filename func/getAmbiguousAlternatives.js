var getPieceByPosition = require('./getPieceByPosition');
var getPiecesOfDenominationAndColour = require('./getPiecesOfDenominationAndColour');
var legalMove = require('./legalMove');

module.exports = function(board, fromPosition, toPosition){
    var piece = getPieceByPosition(board, fromPosition);
    var denomination = piece.denomination;
    var colour = piece.colour;
    var pieces = getPiecesOfDenominationAndColour(board, denomination, colour);

    if(pieces.length === 1) return false;

    //remove piece from pieces
    for(var i = 0; i < pieces.length; i++){
        if(pieces[i] === piece) pieces.splice(i, 1);
    }

    //get other pieces of same denomination that could have moved to to position
    var otherPieces = []
    for(var i = 0; i < pieces.length; i++){
        var otherPiece = pieces[i];
        if(legalMove(board, colour, otherPiece.column + otherPiece.row, toPosition.column + toPosition.row)){
            otherPieces.push(otherPiece);
        }
    }

    return otherPieces;
}