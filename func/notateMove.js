var getPieceByPosition = require('./getPieceByPosition');
var squareOccupied = require('./squareOccupied');
var getLastMoveNumber = require('./notate/getLastMoveNumber');

module.exports = function (board, fromPosition, toPosition) {
    console.log("top of notate move board.moves="+board.moves);
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

    //if it takes
    if (squareOccupied(board, toPosition.column, toPosition.row)){
        action = "x";
    }else{
        action = "-"
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

    console.log("moveNumber ="+ moveNumber);
    console.log("dot ="+ dot);
    console.log("board.moves="+board.moves);
    console.log("lastMoveNumber ="+ lastMoveNumber);
    console.log("lastMoveNumber is intiger ="+ Number.isInteger(lastMoveNumber));
    console.log(lastMoveNumber > 0)


    console.log("to =" + toPosition.column+toPosition.row);


    console.log("notated move = "+
     moveNumber +
    dot+
    denomination+
    toPosition.column+toPosition.row);

     // board.moves += moveNumber+dot+denomination+toPosition.column+toPosition.row;
    console.log("board.meves before"+board.moves);
    board.moves += moveNumber + dot+denomination+toPosition.column+toPosition.row;
    console.log("board.meves after"+board.moves);

    // board.moves += "mince";
    return;


}