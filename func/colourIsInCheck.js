var getColouredPieces = require('./getColouredPieces');
var getLocationOfPiece = require('./getLocationOfPiece');

module.exports = function(board, colour){
    // get the coloured pieces
    var pieces = getColouredPieces(board, colour);

    //get kings square location
    var kingLocation;
    for (var i = 0; i < pieces.length; i++){
        var piece = pieces[i];
        if (piece.denomination === "king"){
            kingLocation = getLocationOfPiece(piece);
        }
    }

    //get oppopnent's pieces
    var opColour;

    if (colour === "white") {
        opColour = "black";
    } else {
        opColour = "white"
    }

    var opPieces = getColouredPieces(board, opColour);


    // see if any of the pieces could take the king
    for (var i = 0; i < opPieces.length; i++) {
        var opPiece = opPieces[i];
        if ( couldMove(testBoard, colour, from, to)) {
            return true;
        }
    }
    return false;
}