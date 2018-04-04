var getAmbiguousAlternatives = require('./getAmbiguousAlternatives')

module.exports = function (board, fromPosition, toPosition) {
    var pieces = getAmbiguousAlternatives(board, fromPosition, toPosition);
    var column, row, count

    // use column if no other piece on column
    count = 0;
    column = fromPosition.column;
    pieces.forEach((piece) => {
        if (piece.column === column) count++;
    })
    if (count === 0) return fromPosition.column;


//use row if no other piece on row
    count = 0;
    var row = fromPosition.row;
    pieces.forEach((piece) => {
        if (piece.row === row) count++;
    })
    if (count === 0) return fromPosition.row;


    return fromPosition.column + fromPosition.row;
}