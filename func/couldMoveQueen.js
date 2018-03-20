var legalMoveBishop = require('./couldMoveBishop');
var legalMoveRook = require('./couldMoveRook');

module.exports = function(board, colour, from, to){

    if (legalMoveBishop(board, colour, from, to)) return true;
    if (legalMoveRook(board, colour, from, to)) return true;
    return false;


}