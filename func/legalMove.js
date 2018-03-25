// from and to are squarenames

var couldMove = require('./couldMove');
var movePutsMoverInCheck = require('./movePutsMoverInCheck');

module.exports = function(board, colour, from, to){
    return (couldMove(board, colour, from, to)
         && !movePutsMoverInCheck(board, colour, from, to)
    );

}