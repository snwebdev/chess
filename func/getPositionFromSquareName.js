module.exports = function(squareName){
    return {
        column: squareName.substring(0,1),
        row: squareName.substring(1,2)
    }
}