
var makeMove = require('./makeMove');
 var legalMove = require('./legalMove');

module.exports = function(board, colour, from, to) {


    if( legalMove(board, colour, from, to)
    ){
        console.log("legal move from "+from+" to "+to);

        return makeMove(board, colour, from, to);

    } else{
        return false;
    }


}