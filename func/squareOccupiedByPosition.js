module.exports = function squareOccupied(board, position){

    for (var i = 0; i < board.pieces.length; i++) {
        var piece = board.pieces[i];
        if(position.column === piece.column &&
            position.row === piece.row){
            return true;
        }
    }
    return false;
}