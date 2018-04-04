var board;
var nextClick = "from";
var from, to;

$(document).ready(function () {
    newGame();
    watchForToFromClicks();

    $("#new-game-btn").click(function () {
        newGame();
    });
});

function newGame() {
    $.getJSON('newgame', function (data) {
        board = data;
        populateScreenBoard(board.pieces);
        clearMoves();
    });
}

function populateScreenBoard(pieces) {
    //empty screen board
    $(".black, .white").html("");

    //populate screen board
    pieces.forEach((piece) => {
        var row = piece.row;
        var column = piece.column;
        var colour = piece.colour;
        var denomination = piece.denomination
        $("td[data-column=" + column + "][data-row=" + row + "]").html("<div class=" + colour + "-" + denomination + "></div>");
    });
}

function getSquareName(element) {
    return element.attr("data-column") + element.attr("data-row");
}

function watchForToFromClicks() {
    $(".black, .white").click(function () {
        $(this).addClass("selected");
        if (nextClick === "from") {
            from = getSquareName($(this));
            nextClick = "to;"
        } else {
            $(".black, .white").removeClass("selected");
            nextClick = "from";
            to = getSquareName($(this));
            if (from !== to) {
                submitMove(from, to);
            }
        }

    });
}

function submitMove(from, to) {
    $.ajax({
        type: 'POST',
        url: 'submitmove',
        contentType: "application/json",
        data: JSON.stringify({
            board: board,
            from: from,
            to: to,
        }),
        success: function (data) {
            if (data !== false) {
                board = data;
                populateScreenBoard(board.pieces);
                if(board.state === "promotion"){
                    promotion();
                    watchForPromoClick();
                }else{
                    if(gameEnded()){
                        end();
                    }else{
                        getRandomMove();
                    }

                }
            }
        }
    });
}

function getRandomMove() {
    $.ajax({
        type: 'POST',
        url: 'getrandommove',
        data: JSON.stringify({board: board}),
        contentType: "application/json",
        success: function (data) {
            board = data;


            populateScreenBoard(board.pieces);
            $("#notation").html(board.moves);

        }
    });
}

function promotion() {
alert("promotion");
    $("#promo").css('visibility', 'visible');
    $(".black,.white").addClass("hover-off");
}

function watchForPromoClick(){
    $(".promo").click(function () {
        var denomination = this.getAttribute("data-piece");
        $.ajax({
            type: 'POST',
            url: 'promote',
            data: JSON.stringify({
                board: board,
                denomination: denomination
            }),
            contentType: "application/json",
            success: function (data) {
                board = data;

                populateScreenBoard(board.pieces);
                $("#promo").css('visibility', 'hidden');
                $(".black,.white").removeClass("hover-off");
                board.state = "";

                // update the notation window
                $("#notation").html(board.moves);
                getRandomMove();
            }
        });
    });
}

function gameEnded(){
    return board.state === "ended";
}

function end(){
    $(".black,.white").addClass("hover-off");
}

function clearMoves(){
$("#notation").html("");
}

