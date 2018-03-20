module.exports = function (board, position) {
    var diagonals = [];


    while (!(position.column === "a" || position.row === "8")) {
        position = {
            column: board.columns[board.columns.indexOf(position.column) - 1],
            row: board.rows[board.rows.indexOf(position.row) + 1],

        }
    }

    while (position.column <= "h" && position.row <= "8") {
        diagonals.push(position);
        position = {
            column: board.columns[board.columns.indexOf(position.column) + 1],
            row: board.rows[board.rows.indexOf(position.row) - 1],
        }
    }


    return diagonals;
}