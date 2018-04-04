var getPieceByPosition = require('./getPieceByPosition');

module.exports = function(board, denomination){
    var piece, pawn;
    for (var i = 0; i < board.pieces.length; i++){
        var piece = board.pieces[i];
        if (piece.colour === "white" && piece.denomination === "pawn" && piece.row === "8"){
            pawn = piece;
        }

    }

    pawn.denomination = denomination;



   // board.promoDenomination = denomination;

    var text = board.moves;
    var denominationLetter;
    if(denomination === "knight"){
        denominationLetter = "N";
    }else{
        denominationLetter = denomination.substring(0,1).toUpperCase();
    }


            board.moves += "="+denominationLetter;
            return board;


}