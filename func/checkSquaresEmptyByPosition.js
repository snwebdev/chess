var squareOccupiedByPosition = require('./squareOccupiedByPosition');

module.exports = function(board, positions){
    for (var i = 0; i < positions.length; i++){
        if (squareOccupiedByPosition(board, positions[i])) return false;
    }
    return true;
}