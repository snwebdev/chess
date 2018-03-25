var getPieceBySquareName = require('./getPieceBySquareName');
var squareEmptyBySquareName = require('./squareEmptyBySquareName');
var pieceOtherThanKingCouldMoveTo = require('./pieceOtherThanKingCouldMoveTo');
var isInCheck = require('./isInCheck');


module.exports = function (board) {
    //are there pieces where the king and rook should be?
    if (squareEmptyBySquareName(board, "e1")) return false;
    if (squareEmptyBySquareName(board, "a1")) return false;

    //are the spaces between king and rook empty?
    if (!squareEmptyBySquareName(board, "b1")) return false;
    if (!squareEmptyBySquareName(board, "c1")) return false;
    if (!squareEmptyBySquareName(board, "d1")) return false;


    //is the piece where the king should be a white king that has not yet moved?
    var king = getPieceBySquareName(board, "e1");
    if (king.colour != "white") return false;
    if (king.column != "e") return false;
    if (king.row != "1") return false;
    if (king.mayYetCastle != true) return false;

    //is the piece where the rook should be a white rook that has not yet moved?
    var rook = getPieceBySquareName(board, "a1");
    if (rook.colour != "white") return false;
    if (rook.column != "a") return false;
    if (rook.row != "1") return false;
    if (rook.mayYetCastle != true) return false;

    //is the king in check?
    if (isInCheck(board, "white")) return false;

    //would the king be moving through, or into, check?
    if (pieceOtherThanKingCouldMoveTo(board, "black", "b1")) return false;
    if (pieceOtherThanKingCouldMoveTo(board, "black", "c1")) return false;
    if (pieceOtherThanKingCouldMoveTo(board, "black", "d1")) return false;


    return true;

}