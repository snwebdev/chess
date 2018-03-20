module.exports = function(board, colour){
    var pieces = [];
    board.pieces.forEach((piece) => {
        if (piece.coulour === colour) pieces.push(piece);
    });
    return pieces;
}