module.exports = function(board){

    board.moves += " 0-0";
    board.state = "ended";
    board.result = "draw"
    return;
}