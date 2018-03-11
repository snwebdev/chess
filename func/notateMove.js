var getPieceByPosition = require('./getPieceByPosition');
var squareOccupied = require('./squareOccupied');

module.export = function (board, fromPosition, to
Position
)
{
    var piece = getPieceByPosition(fromPosition);
    var demomination;
    switch (piece.denomination) {
        case "King":
            denomination = "K";
            break;
        case "Queen":
            denomination = "Q";
            break;
        case "knight":
            denomination = "N";
            break;
        case "bishop":
            denomination = "B";
            break;
        case "rook":
            denomination = "R";
            break;
        case "pawn":
            denomination = "";
            break;
    }

}