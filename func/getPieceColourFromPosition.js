module.exports = function getPieceColourFromPosition(board, position){
    for (var i = 0; i < board.pieces.length; i++){
        if (board.pieces[i].column === position.column &&
            board.pieces[i].row === position.row){
            return board.pieces[i].colour;
        }
    }
    return -1;
}