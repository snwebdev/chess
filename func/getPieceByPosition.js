var getColumnAndRowFromSquareName = require('./getColumnAndRowFromSquareName');

module.exports = function getPiece(board, position){
    for (var i = 0; i < board.pieces.length; i++){
        var piece = board.pieces[i];
        if(piece.column === position.column &&
            piece.row === position.row){
            return piece;
        }

    }
    return -1;
}