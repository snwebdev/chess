module.exports = function getColumnAndRowFromSquareName(squareName){
    //console.log("in get column and row from square name. squareName="+squareName);
    var row = squareName.substring(1,2);
    var column = squareName.substring(0,1);
    return {
        column: column,
        row: row
    };
}