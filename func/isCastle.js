var getPieceBySquareName = require('./getPieceBySquareName');

module.exports = function(board, from, to){
    var piece  = getPieceBySquareName(board, from);

    if(piece.denomination != "king") return false;
    if(from != "e1" && from != "e8") return false;

    var column = to.substring(0,1);
    if(column != "c" && column != "g") return false;
    return true;
}