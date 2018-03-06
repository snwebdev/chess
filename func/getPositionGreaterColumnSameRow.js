module.exports = function(board, position){
    var index = board.rows.indexOf(position.column)  + 1;
    return {column: position.column, row: board.rows[index]}
}