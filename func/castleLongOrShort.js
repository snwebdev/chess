module.exports = function (to) {
    var column = to.substring(0, 1);

    if (column === "g") return "short";
    if (column === "c") return "long";
}