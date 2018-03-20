module.exports = function(moves){
    if (moves === "") return 0;

    for(var i = moves.length -1 ; i >= 0; i--){
        if(moves.charAt(i) === "."){
            console.log("found the dot");
            var moveNumber = "";
            var prevIndex = i-1;
            while (prevIndex > -1 && !isNaN(moves.charAt(prevIndex))){
                moveNumber += moves.charAt(prevIndex);
                console.log("in getLastMoveNumber moveNumber="+ moveNumber);
                console.log("type of  moveNumber="+ typeof(moveNumber));
                prevIndex--;
            }

            return parseInt(moveNumber);
        }
    }
}