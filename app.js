console.log("chess");

function Piece(colour, name){
    this.colour = colour,
        this.name = name
}

Piece.prototype.printProperties = function(){
    console.log(JSON.stringify(this));
}
Piece.prototype.squaresHorizontalRight = function(square){
    var rows = ["1","2","3", "4", "5", "6", "7", "8"];
    var columns = ["a", "b", c]

    console.log(square);
}


var piece1 = new Piece("Black", "Rook");
var piece2 = new Piece("White", "Knight");

var board = [piece1, piece2];

board.forEach((piece) => {
    piece.squaresHorizontalRight("e2");
})