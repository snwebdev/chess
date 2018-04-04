var getColumnAndRowFromSquareName = require('./getColumnAndRowFromSquareName');

module.exports = function getPiece(board, squareName){
   // console.log("getPiece "+squareName);
    var targetPosition = getColumnAndRowFromSquareName(squareName);
    for (var i = 0; i < board.pieces.length; i++){
        var piece = board.pieces[i];
       if(piece.column === targetPosition.column &&
       piece.row === targetPosition.row){
           return piece;
       }

    }
    return -1;
}