var legalMoveBishop = require('./legalMoveBishop');
var legalMoveRook = require('./legalMoveRook');

module.exports = function(move, colour, from, to){

    if (legalMoveBishop(move, colour, from, to)) return true;
    if (legalMoveRook(move, colour, from, to)) return true;
    return false;


}