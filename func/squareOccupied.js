module.exports = function squareOccupied(board, column, row){

    for (var i = 0; i < board.pieces.length; i++) {
        var square = board.pieces[i];
        if(column === square.column &&
            row === square.row){
            return true;
        }
    }
    return false;
}