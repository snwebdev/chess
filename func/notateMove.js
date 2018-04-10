var getPieceByPosition = require('./getPieceByPosition');
var squareOccupied = require('./squareOccupied');
var getLastMoveNumber = require('./notate/getLastMoveNumber');
var moveChecksOpponent = require('./moveChecksOpponent');
var isCastle = require('./isCastle');
var castleLongOrShort = require('./castleLongOrShort');
var notationAmbiguous = require('./notationAmbiguous');
var getDisambiguation = require('./getDisambiguation');
var disambiguation = "";
var canNotGetOutOfCheck = require('./canNotGetOutOfCheck');


module.exports = function (board, fromPosition, toPosition) {


    var piece = getPieceByPosition(board, fromPosition);
    var colour = piece.colour;
    var denomination;
    var moves = board.moves;
    switch (piece.denomination) {
        case "king":
            denomination = "K";
            break;
        case "queen":
            denomination = "Q";
            break;
        case "knight":
            denomination = "N";
            break;
        case "bishop":
            denomination = "B";
            break;
        case "rook":
            denomination = "R";
            break;
        case "pawn":
            denomination = "";
            break;
    };
    var colour = piece.colour;

    var action;
    var from = "";

    //if it takes
    if (squareOccupied(board, toPosition.column, toPosition.row)){
        if(denomination === ""){
            denomination = piece.column;
        } else{
        }

        action = "x";
    }else{
        action = ""
    }

    var lastMoveNumber = getLastMoveNumber(board.moves);
    var moveNumber, dot;
    if (colour === "black") dot = " ";


    if (lastMoveNumber === 0 && colour === "white"){
        moveNumber = 1;
        dot = ".";
    }
    if (lastMoveNumber === 0 && colour === "black") moveNumber = "";
    if (lastMoveNumber > 0 && colour === "black") moveNumber = "";
    if (lastMoveNumber > 0 && colour === "white") {
        moveNumber = " "+(lastMoveNumber+1);
        dot = ".";
    }

    var check = "";
    if (moveChecksOpponent(board, colour, fromPosition, toPosition)){
        check = "+";
        }


if (isCastle(board, fromPosition.column + fromPosition.row, toPosition.column+toPosition.row)){
        var castle = castleLongOrShort(toPosition.column+toPosition.row)
    if(castle === "short"){
        board.moves +=
            moveNumber
            + dot
        + " O-O"
    }else{
        board.moves +=
            moveNumber
            + dot
            + " O-O-O"
    }
     return;
}


    board.moves +=
        moveNumber
        + dot
        + denomination
        +disambiguation
        + action
        + toPosition.column+toPosition.row
    + check;
    //console.log("board.meves after"+board.moves);

    // board.moves += "mince";
    return;


}