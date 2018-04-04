var squareOccupiedByPosition = require('./squareOccupiedByPosition');
var getPieceByPosition = require('./getPieceByPosition');
var getPositionFromSquareName = require('./getPositionFromSquareName');
var notateMove = require('./notateMove');
var isInCheck = require('./isInCheck');
var canNotGetOutOfCheck = require('./canNotGetOutOfCheck');
var winForColour = require('./winForColour');
var inStalemate = require('./inStalemate');
var draw = require('./draw');
var isCastle = require('./isCastle');
var castleLongOrShort = require('./castleLongOrShort');
var getPieceBySquareName = require('./getPieceBySquareName');
var opColour;
var notateCastleShort = require('./notateCastleShort');
var notateCastleLong = require('./notateCastleLong');


var movingPiece;

module.exports = function makeMove(board, colour, from, to) {



    var fromPosition = getPositionFromSquareName(from);
    var toPosition = getPositionFromSquareName(to);

    notateMove(board, fromPosition, toPosition);

    movingPiece = getPieceByPosition(board, fromPosition);
    //is it  whitepawn promotion
    if (movingPiece.denomination === "pawn"
        && toPosition.row === "8"
        && movingPiece.colour === "white") {
        board.state = "promotion";
       // board.promoPosition = toPosition;
       // notateMove(board, fromPosition, toPosition);
        if (squareOccupiedByPosition(board, toPosition)) {
            var takenPiece = getPieceByPosition(board, toPosition);
            takenPiece.row = -1;
            takenPiece.column = -1;
        }
        movingPiece.column = toPosition.column;
        movingPiece.row = toPosition.row;
        return board;
    }

     //if castleing, move rook
     if(isCastle(board, from, to)){
        console.log("is castle..................");
         var rook;
         movingPiece.column = toPosition.column;
         movingPiece.row = toPosition.row;
         if(castleLongOrShort(to) === "short"){
             rook = getPieceBySquareName(board, "h" + from.substring(1,2));
             rook.column = "f";
             //notateCastleShort(board);
             // return;
         }
         if(castleLongOrShort(to) === "long"){
             rook = getPieceBySquareName(board, "a" + from.substring(1,2));
             rook.column = "d";
             // notateCastleLong(board);
             // return;
         }
         //
         //
         //
         // }


     }


    if (squareOccupiedByPosition(board, toPosition)) {
       var takenPiece = getPieceByPosition(board, toPosition);
        takenPiece.row = -1;
        takenPiece.column = -1;
    }


    movingPiece.column = toPosition.column;
    movingPiece.row = toPosition.row;
    if(movingPiece.denomination === "rook"){
        movingPiece.mayYetCastle = false;
    }
    if(movingPiece.denomination === "king"){
        movingPiece.mayYetCastle = false;
        board.pieces.forEach((piece) => {
            if(piece.colour === movingPiece.colour
            && piece.denomination === "rook"){
                piece.mayYetCastle = false;
            }
        })

    }

    //get opposite colour
    colour == "white" ? opColour = "black" : opColour = "white";


    // is in check and can't get out?
    if (isInCheck(board, opColour) && canNotGetOutOfCheck(board, opColour)) {
        winForColour(board, colour);
        console.log(board.moves);
        console.log("GGGGGGGGAMMMMMEEEEEEEEEEE OVERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR win");
        board.state = "ended";
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
   // board.empty = fromPosition;

    return (board);
}