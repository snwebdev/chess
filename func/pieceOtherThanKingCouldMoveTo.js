var getPositionFromSquareName = require('./getPositionFromSquareName');
var getPiecesByColour = require('./getPiecesByColour');
var legalMove = require('./legalMove');


module.exports = function(board, colour, squareName){
    var position = getPositionFromSquareName(squareName);
    var pieces = getPiecesByColour(board, colour);

    for(var i = 0; i < pieces.length; i++){
        var piece = pieces[i];
        if(piece.denomination != "king" && legalMove(board, colour, piece.column+piece.row, squareName)) return true
    }

   return false;
}
