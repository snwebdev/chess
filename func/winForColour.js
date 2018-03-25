module.exports = function(board, colour){
    if (colour === "white"){
        note = " 1-0";
    }else{
        note = " 0-1";

    }
    board.moves += note;
    board.state = "ended";
    return board;
}
