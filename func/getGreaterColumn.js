module.exports = function(board, column){
    return board.columns[board.columns.indexOf(column) + 1];
}