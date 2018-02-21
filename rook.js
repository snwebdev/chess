function Piece(colour, name){
    this.colour = colour,
        this.name = name
}

var piece1 = new Piece("Black", "rook");
var piece2 = new Piece("White", "Knight");

var board = [piece1, piece2];

board.forEach((piece) => {
    console.log(piece.toString());
})