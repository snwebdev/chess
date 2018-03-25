var getPositionFromSquareName = require('./getPositionFromSquareName');
var couldMove = require('./couldMove');
var getColumnAndRowFromSquareName = require('./getColumnAndRowFromSquareName');
var squareOccupiedByPosition = require('./squareOccupiedByPosition');
var getPieceByPosition = require('./getPieceByPosition');


var testBoard = {};


module.exports = function (board, colour, from, to) {

    var fromPosition = getPositionFromSquareName(from);
    var toPosition = getPositionFromSquareName(to);
    var movingPiece;

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

    movingPiece = getPieceByPosition(testBoard, fromPosition);

        //if to position occupied remove occupant
        if (squareOccupiedByPosition(testBoard, toPosition)){
            var piece = getPieceByPosition(testBoard, toPosition);
            piece.column = -1;
            piece.row = -1;
        }

        //move the moving piece
            movingPiece.column = toPosition.column;
            movingPiece.row = toPosition.row;








    //get positon of colour's king
    var kingPosition = {};
    for (var i = 0; i < testBoard.pieces.length; i++) {
        if (testBoard.pieces[i].denomination === "king" &&
            testBoard.pieces[i].colour === colour) {
            kingPosition = {column: testBoard.pieces[i].column, row: testBoard.pieces[i].row}
        }
    }
    //if king position = from then change to to
    if(kingPosition.column + kingPosition.row === from){
        kingPosition = getPositionFromSquareName(to);
    }
    var opColour;
    if (colour === "white") {
        opColour = "black";
    } else {
        opColour = "white"
    }

    for (var i = 0; i < testBoard.pieces.length; i++) {
        var piece = testBoard.pieces[i];
        if (
            piece.colour === opColour && piece.row > -1 &&
            // legalMove(testBoard, opColour, piece.column + piece.row, kingPosition.column + kingPosition.row)
            couldMove(testBoard, opColour, piece.column + piece.row, kingPosition.column + kingPosition.row)
        ) {
            return true;
        }
    }
    ;


    return false;
}