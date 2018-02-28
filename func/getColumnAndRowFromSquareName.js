module.exports = function getColumnAndRowFromSquareName(squareName){
    var row = squareName.substring(1,2);
    var column = squareName.substring(0,1);
    return {
        column,
        row
    };
}