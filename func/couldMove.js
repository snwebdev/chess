var getPiece = require('./getPiece');
var couldMovePawn = require('./couldMovePawn');
var couldMoveRook = require('./couldMoveRook');
var couldMoveBishop = require('./couldMoveBishop');
var couldMoveQueen = require('./couldMoveQueen');
var couldMoveKing = require('./couldMoveKing');
var couldMoveKnight = require('./couldMoveKnight');
// var movePutsMoverInCheck = require('./movePutsMoverInCheck');

module.exports = function couldMove(board, colour, from, to){
    //console.log(`could move ${colour} ${from} ${to}`)

    var piece = getPiece(board, from);

    //if there's no piece on that square
    if (piece === -1) return false;

    //if piece moving to own square
    if (from === to) return false;

    //does piece belong to player?
    if (piece.colour !== colour) return false;

    //would move place mover in check
    // if (movePutsMoverInCheck(board, colour,from, to)) return -1;


    switch(piece.denomination){
        case "pawn":
            return couldMovePawn(board, colour, from, to);
        case "rook":
            return couldMoveRook(board, colour, from, to);
        case "bishop":
            return couldMoveBishop(board, colour, from, to);
        case "queen":
            return couldMoveQueen(board, colour, from, to);
        case "king":
            return couldMoveKing(board, colour, from, to);
        case "knight":
            return couldMoveKnight(board, colour, from, to);
    }
    return false;
}