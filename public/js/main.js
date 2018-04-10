var board;
var nextClick = "from";
var from, to;

$(document).ready(function () {
    setSquareSize();
    setInterval(setSquareSize, 500);
    newGame();
    watchForToFromClicks();

    $("#new-game-btn").click(function () {
        newGame();
    });



    $("body").fadeIn("slow");
});

function getRandomMove() {
    $.ajax({
        type: 'POST',
        url: 'getrandommove',
        data: JSON.stringify({board: board}),
        contentType: "application/json",
        success: function (data) {
            board = data;

            populateScreenBoard(board.pieces);


        }
    });
}

function getSquareName(element) {
    return element.attr("data-column") + element.attr("data-row");
}

function newGame() {
    $.getJSON('newgame', function (data) {
        board = data;
        populateScreenBoard(board.pieces);
        clearMoves();
    });
}

function gameEndModal(board){
    var message = "";
    switch(board.result){
        case "white":
            message = "You Won!";
        break;
        case "stalemate":
            message = "Stalemate!";
            break;
        case "black":
            message = "You Lost!";
            break;
    }

    $("#result-modal-message").html(message);
    $("#resultModal").modal("show");
}

function populateScreenBoard(pieces) {

    console.log(board);
    //empty screen board
    $(".black, .white").removeClass("white-pawn white-knight white-bishop white-rook white-queen white-king black-pawn black-knight black-bishop black-queen black-king");

    //populate moves
    $("#moves").html(board.moves);

    //populate screen board
    pieces.forEach((piece) => {
        var row = piece.row;
        var column = piece.column;
        var colour = piece.colour;
        var denomination = piece.denomination;
        var piecepgn = `${colour}-${denomination}.png`;
       // $("td[data-column=" + column + "][data-row=" + row + "]").html(`<img src="/img/${piecepgn}">`);
        // $("td[data-column=" + column + "][data-row=" + row + "]").html('<div class="' + colour + '-' + denomination + '"></div>');
        $("td[data-column=" + column + "][data-row=" + row + "]").addClass(`${colour}-${denomination}`);

        // $("td[data-column=" + column + "][data-row=" + row + "]").html('asd');
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
                if (board.state === "promotion") {
                    promotion();
                    watchForPromoClick();
                } else {
                    if (gameEnded()) {
                        gameEndModal(board);
                        // end();
                    } else {
                        getRandomMove();
                    }

                }
            }
        }
    });
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

function promotion() {
    //alert("promotion");
    $("#promo").css('visibility', 'visible');
    $(".black,.white").addClass("hover-off");
}

function watchForPromoClick() {
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

function gameEnded() {
    return board.state === "ended";
}

function end() {
    $(".black,.white").addClass("hover-off");
}

function clearMoves() {
    $("#moves").html("");
}

function setSquareSize() {
    // alert($('.navbar').height());
    width = $(window).width();
    height = $(window).height() - $('.navbar').height();
    var limit;
    if (height > width) {
        limit = width
    } else {
        limit = height;
    }
    var squareSize = limit / 12;
    $("td").css("height", squareSize + "px");
    $("td").css('width', squareSize + "px");

    $("#moves").css("height", squareSize * 7 + "px");
    $("#moves").css("margin-top", squareSize + "px");

}

