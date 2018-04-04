module.exports = function(board, denomination, colour){
    var pieces = [];
    board.pieces.forEach((piece) => {
        if(piece.colour === colour && piece.denomination === denomination && piece.row >- 1) pieces.push(piece);
    });
    return pieces;
}