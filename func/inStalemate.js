var getAllPositions = require('./getAllPositions');
var legalMove = require('./legalMove');
var getAllPositions = require('./getAllPositions');

module.exports = function(board, colour){
    var testBoard = {};
    testBoard.pieces = [];
    testBoard.rows = board.rows;
    testBoard.columns = board.columns;
    board.pieces.forEach((piece) => {
        var newPiece = {
            colour: piece.colour,
            column: piece.column,
            row: piece.row,
            denomination: piece.denomination
        };
        testBoard.pieces.push(newPiece);
    });

    //get colour king's position
    var king;
    for (var i = 0; i < testBoard.pieces.length; i++ ){
        var piece = testBoard.pieces[i];
        if (piece.colour === colour && piece.denomination === "king"){
            king = piece;
        }
    }

    //any piece other than king can move?
    var nonKingPieces = [];
    testBoard.pieces.forEach((piece) =>{
        if(piece.colour === colour && piece.denomination != "king" && piece.row != -1) nonKingPieces.push(piece);
    });
    for(var i = 0; i < nonKingPieces.length; i++){
        var piece = nonKingPieces[i];
        //get all legaldestinations for piece
        var legalDestinations = [];
        var allPositions = getAllPositions(board);

        for(var j = 0; j < allPositions.length; j++) {
            var position = allPositions[j];
           // console.log(piece. colour+" "+piece.denomination+" "+piece.column + piece.row+" - "+position.column + position.row)
            if (piece.row != -1 && legalMove(testBoard, colour, piece.column + piece.row, position.column + position.row)) {
                return false;
            }
        }
    }
    //get all legaldestinations for piece
    var legalDestinations = [];
    var allPositions = getAllPositions(board);

    allPositions.forEach((position) => {
        if (legalMove(testBoard, colour, piece.column + piece.row, position.column + position.row)) {
            legalDestinations.push(position);
        }
    })

    //get all legal destinations for king
    var legalDestinations = [];
    var allPositions = getAllPositions(board);

   for(var i = 0; i< allPositions.length; i++) {
       var position = allPositions[i];
        if (legalMove(board, colour, king.column + king.row, position.column + position.row)) {
            return false;
        }
    }
    return true;

}