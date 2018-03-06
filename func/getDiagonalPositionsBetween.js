module.exports = function(board, position1, position2){

    var diagonals = [];
    var between = [];
    var position = {};
    var lowerColumn, higherColumn;




    if (position1.column < position2.column){
        lowerColumn = position1;
        higherColumn = position2;
    } else {
        lowerColumn = position2;
        higherColumn = position1;
    }


    if (lowerColumn.row < higherColumn.row){
       position = {
           column : board.columns[board.columns.indexOf(lowerColumn.column) + 1],
           row : board.rows[board.rows.indexOf(lowerColumn.row) + 1],

       }
       while(position.column !== higherColumn.column &&
           position.row !== higherColumn.row){
           between.push(position);
           position = {
               column : board.columns[board.columns.indexOf(position.column) + 1],
               row : board.rows[board.rows.indexOf(position.row) + 1],

           }
       }
    }

    if (lowerColumn.row > higherColumn.row){
        position = {
            column : board.columns[board.columns.indexOf(lowerColumn.column) + 1],
            row : board.rows[board.rows.indexOf(lowerColumn.row) - 1],

        }
        while(position.column !== higherColumn.column &&
        position.row !== higherColumn.row){
            between.push(position);
            position = {
                column : board.columns[board.columns.indexOf(position.column) + 1],
                row : board.rows[board.rows.indexOf(position.row) - 1],

            }
        }
    }

    return between

}