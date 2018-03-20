var legalMove = require('./couldMove');
var getAllPositions = require('./getAllPositions');
var makeMove = require('./makeMove');
var makeMove = require('./makeMove');

module.exports = function (board, colour) {
    console.log("top of random move board.moves="+board.moves);
    //get all the relevant pieces
    //pick one
    //go over all sqaures as potential targets
    //store legal moves for that piece
    //choose one and return it
    //if no legal moves for that piece, remove it from pieces and choose another

    var pieces = board.pieces;
    var relevantPieces = []
    for (var i = pieces.length - 1; i >= 0; i--) {
        var piece = pieces[i];
        if (piece.colour === colour && piece.row > -1) {
            relevantPieces.push(piece);
        }
    }

    //choose a piece
    while (relevantPieces.length > 0) {
        var randomPiece = relevantPieces[Math.floor(Math.random() * relevantPieces.length)];
        //console.log(randomPiece);

        //remove that piece from relevant pieces
        relevantPieces.splice(relevantPieces.indexOf(randomPiece), 1);

        //get all legaldestinations for random piece
        var legalDestinations = [];
        var allPositions = getAllPositions(board);

        allPositions.forEach((position) => {
            if (legalMove(board, colour, randomPiece.column + randomPiece.row, position.column + position.row)) {
                legalDestinations.push(position);
            }
        })
        if (legalDestinations.length > 0) {
            //choose a destination
            var randomDestination = legalDestinations[Math.floor(Math.random() * legalDestinations.length)];
            console.log("board.moves="+board.moves);
           return makeMove(board, colour, randomPiece.column+randomPiece.row, randomDestination.column+randomDestination.row);
            // return board;
            //
            // return (
            //     {
            //         from: {
            //             column: randomPiece.column,
            //             row: randomPiece.row
            //         },
            //         to: {
            //             column: randomDestination.column,
            //             row: randomDestination.row
            //         }
            //     }
            // );

        }
    }


}