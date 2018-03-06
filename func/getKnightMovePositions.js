module.exports = function(board, position){

    var positions = [];
    var changes = [
        [1,2],
        [2,1],
        [2,-1],
        [1,-2],
        [-1,-2],
        [-2,-1],
        [-2,1],
        [-1,2]
    ];

    changes.forEach((change) => {
        var newPosition = {
            column: board.columns[board.columns.indexOf(position.column) + change[0]],
            row: board.rows[board.rows.indexOf(position.row) + change[1]]
        };
        if (typeof(newPosition.column) != 'undefined' && typeof(newPosition.row) != 'undefined') {
            positions.push(newPosition);
        }
    });
    return positions;
}



