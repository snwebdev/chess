var getPositionFromSquareName = require('./getPositionFromSquareName');
var legalMove = require('./legalMove');

module.exports = function(board, colour, from, to){
    var fromPosition = getPositionFromSquareName(from);
    var toPosition = getPositionFromSquareName(to);

    //get positon of colour's king
    var kingPosition = {};
    for(var i = 0; i < board.pieces; i++){
        if (board.pieces[i].denomination === "king" &&
        board.pieces[i].colour === colour){
            kingPosition = {column: board.pieces[i].column, row: board.pieces[i].row}
        }
    }
    var opColour;
    if(colour === "white"){
        opColour = "black";
    }else {
        opColour = "whitea"
    }

   for (var i = 0; i < board.pieces; i++){
        var piece = board.pieces[i];
        if (piece.colour === opColour &&
        legalMove(board, opColour, piece.column+piece.row, kingPosition.column+kingPosition.row)){
            return true;
        }
   };


    return false;
}