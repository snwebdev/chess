module.exports = function(board, colour){
    var pieces = [];
    board.pieces.forEach((piece) => {
        if (piece.colour === colour) pieces.push(piece);
    })
    return pieces;
}