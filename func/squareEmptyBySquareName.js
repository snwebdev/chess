module.exports = function squareOccupied(board, squareName){

    var column = squareName.substring(0,1);
    var row = squareName.substring(1,2);

    for (var i = 0; i < board.pieces.length; i++) {

        var piece = board.pieces[i];
        if(column === piece.column &&
            row === piece.row){
            return false;
        }
    }
    return true;
}