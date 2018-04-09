module.exports = {
    state: "started",
    moves: "",
    toPlay: "white",
    columns: ["a", "b", "c", "d", "e", "f", "g", "h"],
    rows: ["1", "2", "3", "4", "5", "6", "7", "8"],
    pieces: [
        {
            row: "8",
            column: "a",
            colour: "black",
            denomination: "king",
            mayYetCastle: true
        },

        {
            row: "1",
            column: "f",
            colour: "white",
            denomination: "king",
            mayYetCastle: true

        },


        {
            row: "1",
            column: "h",
            colour: "white",
            denomination: "rook",
            mayYetCastle: true
        },
        {
            row: "7",
            column: "g",
            colour: "white",
            denomination: "rook",
            mayYetCastle: true
        }

    ]
}
