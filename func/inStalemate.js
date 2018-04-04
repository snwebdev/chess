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

    //get all the colour pieces
    var pieces = [];
    testBoard.pieces.forEach((piece) => {
        if(piece.colour === colour && piece.row >-1) pieces.push(piece);
    });

    //get all possible destination positions
    var allPositions = getAllPositions(board);

    //see if any piece can move to any position

    for(var i = 0; i < pieces.length; i++){
        var piece = pieces[i];
        for (var j = 0; j < allPositions.length; j++){
            var position = allPositions[j];
            if (legalMove(testBoard, colour, piece.column+piece.row, position.column+position.row)){
                return false;
            }
        }
    }




    return true;

}