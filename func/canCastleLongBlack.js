var getPieceBySquareName = require('./getPieceBySquareName');
var squareEmptyBySquareName = require('./squareEmptyBySquareName');
var pieceOtherThanKingCouldMoveTo = require('./pieceOtherThanKingCouldMoveTo');
var isInCheck = require('./isInCheck');


module.exports = function (board) {
    //are there pieces where the king and rook should be?
    if (squareEmptyBySquareName(board, "e8")) return false;
    if (squareEmptyBySquareName(board, "a8")) return false;

    //are the spaces between king and rook empty?
    if (!squareEmptyBySquareName(board, "b8")) return false;
    if (!squareEmptyBySquareName(board, "c8")) return false;
    if (!squareEmptyBySquareName(board, "d8")) return false;


    //is the piece where the king should be a black king that has not yet moved?
    var king = getPieceBySquareName(board, "e8");
    if (king.colour != "black") return false;
    if (king.column != "e") return false;
    if (king.row != "8") return false;
    if (king.mayYetCastle != true) return false;

    //is the piece where the rook should be a black rook that has not yet moved?
    var rook = getPieceBySquareName(board, "a8");
    if (rook.colour != "black") return false;
    if (rook.column != "a") return false;
    if (rook.row != "8") return false;
    if (rook.mayYetCastle != true) return false;

    //is the king in check?
    if (isInCheck(board, "black")) return false;

    //would the king be moving through, or into, check?
    if (pieceOtherThanKingCouldMoveTo(board, "white", "b8")) return false;
    if (pieceOtherThanKingCouldMoveTo(board, "white", "c8")) return false;
    if (pieceOtherThanKingCouldMoveTo(board, "white", "d8")) return false;


    return true;

}