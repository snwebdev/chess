var getColumnAndRowFromSquareName = require('./getColumnAndRowFromSquareName');

module.exports = function getPiece(board, squareName){
    for (var i = 0; i < board.pieces.length; i++){
        var piece = board.pieces[i];
        if(piece.column === squareName.substring(0,1) &&
            piece.row === squareName.substring(1,2)){
            return piece;
        }

    }
    return -1;
}