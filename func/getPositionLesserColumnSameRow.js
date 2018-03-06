module.exports = function(board, position){
    var index = board.columns.indexOf(position.column)  - 1;
    return {column: board.columns[index], row: position.row}
}