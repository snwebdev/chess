var squareOccupied = require('./squareOccupied');

module.exports = function (board, positions) {
    for (var i = 0; i < positions.length; i++) {
        var position = positions[i];
        if (squareOccupied(board, position.column, position.row)) {
            return true;
        }

    }
    return false
}