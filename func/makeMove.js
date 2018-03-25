var squareOccupiedByPosition = require('./squareOccupiedByPosition');
var getPieceByPosition = require('./getPieceByPosition');
var getPositionFromSquareName = require('./getPositionFromSquareName');
var notateMove = require('./notateMove');
var isInCheck = require('./isInCheck');
var canNotGetOutOfCheck = require('./canNotGetOutOfCheck');
var winForColour = require('./winForColour');
var inStalemate = require('./inStalemate');
var draw = require('./draw');
var opColour;


var movingPiece;

module.exports = function makeMove(board, colour, from, to) {
    console.log("makeMove"+" "+colour + " "+ from+" "+ to)
    var fromPosition = getPositionFromSquareName(from);
    var toPosition = getPositionFromSquareName(to);
    console.log("to = "+to);

    movingPiece = getPieceByPosition(board, fromPosition);
    //is it  whitepawn promotion
    if (movingPiece.denomination === "pawn"
        && toPosition.row === "8"
        && movingPiece.colour === "white") {
        board.state = "promotion";
        board.promoPosition = toPosition;
        notateMove(board, fromPosition, toPosition);
        if (squareOccupiedByPosition(board, toPosition)) {
            var takenPiece = getPieceByPosition(board, toPosition);
            takenPiece.row = -1;
            takenPiece.column = -1;
        }

        movingPiece.column = toPosition.column;
        movingPiece.row = toPosition.row;


        return board;
    }

    notateMove(board, fromPosition, toPosition);

    if (squareOccupiedByPosition(board, toPosition)) {
       var takenPiece = getPieceByPosition(board, toPosition);
        takenPiece.row = -1;
        takenPiece.column = -1;
    }




    //board.moves += notatedMove;
    //console.log(board.moves);

    movingPiece.column = toPosition.column;
    movingPiece.row = toPosition.row;
    if(movingPiece.denomination === "rook"){
        movingPiece.mayYetCastle = false;
    }
    if(movingPiece.denomination === "king"){
        movingPiece.mayYetCastle = false;
    }

    //get opposite colour
    colour == "white" ? opColour = "black" : opColour = "white";


    // is in check and can't get out?
    if (isInCheck(board, opColour) && canNotGetOutOfCheck(board, opColour)) {
        winForColour(board, colour);
        console.log(board.moves);
        console.log("GGGGGGGGAMMMMMEEEEEEEEEEE OVERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR win");
        return board;
    }

    //is in stalemate?
    if (inStalemate(board, opColour)) {
        winForColour(board, "black");
        draw(board);
        console.log(board.moves);
        console.log("GGGGGGGGAMMMMMEEEEEEEEEEE OVERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR stalemate");
        return board;
    }


//console.log("makemove board="+JSON.stringify(board));

    //tell the display which square to empty
    board.empty = fromPosition;

    return (board);
}