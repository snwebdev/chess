module.exports = {
    moves: "1. e4 d6",
    toPlay: "white",
    columns: ["a", "b", "c", "d", "e", "f", "g", "h"],
    rows: ["1", "2", "3", "4", "5", "6", "7", "8"],
    pieces: [
        {
            row: "1",
            column: "h",
            colour: "white",
            denomination: "rook",
            mayYetCastle: true
        },

        {
            row: "1",
            column: "e",
            colour: "white",
            denomination: "king",
            mayYetCastle: true

        },

        {
            row: "8",
            column: "c",
            colour: "black",
            denomination: "king",
            mayYetCastle: true
        },

        {
            row: "4",
            column: "d",
            colour: "black",
            denomination: "queen"

        },
        {
            row: "1",
            column: "a",
            colour: "white",
            denomination: "rook",
            mayYetCastle: true
        }

    ]
}
