module.exports = function (moves) {
    if (moves === "") return 0;
    for (var i = moves.length - 1; i >= 0; i--) {
        if (moves.charAt(i) === ".") {
            // console.log("found the dot");
            var character = "";
            var previousCharacter = "";
            var numberString = "";
            var index = i;
            while (previousCharacter !== " " && index !== 0) {
                index--;
                previousCharacter = moves.charAt(index);
                numberString = previousCharacter + numberString;
            }
            return parseInt(numberString);
        }
    }
}