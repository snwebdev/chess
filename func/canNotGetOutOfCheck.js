var legalMove = require('./couldMove');
var getAllPositions = require('./getAllPositions');
var makeMove = require('./makeMove');
var makeMove = require('./makeMove');
var movePutsMoverInCheck = require('./movePutsMoverInCheck');
var isInCheck = require('./isInCheck');

module.exports = function (board, colour) {


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



        //get all legaldestinations for random piece
        var legalDestinations = [];
        var allPositions = getAllPositions(board);

        allPositions.forEach((position) => {
            if (legalMove(board, colour, randomPiece.column + randomPiece.row, position.column + position.row)) {
                legalDestinations.push(position);
            }
        });

        while (legalDestinations.length > 0) {
            //choose a destination
            var randomDestination = legalDestinations[Math.floor(Math.random() * legalDestinations.length)];
            // console.log("board.moves="+board.moves);

            if (movePutsMoverInCheck(board, colour, randomPiece.column+randomPiece.row, randomDestination.column+randomDestination.row)){
                //removeDestination
                legalDestinations.splice(legalDestinations.indexOf(randomDestination), 1);
            } else {
                return false;
            }

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
        //remove that piece from relevant pieces
        relevantPieces.splice(relevantPieces.indexOf(randomPiece), 1);
    }
    //norelevant pieces left
    return true


}