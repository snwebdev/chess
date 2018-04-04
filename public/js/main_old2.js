var board;
var promoPosition;
var select;
//get board from server
$(document).ready(function () {
    $.getJSON('newgame', function (data) {

        var fromColumn, fromRow, toColumn, toRow, readyForSelect;
        var selected = "";
        var board;

        board = data;

        populateScreenBoard(board.pieces);



        readyForSelect = true;
        $(".black, .white").click(function () {
            if ((select != "promo") && (selected === "from" && board.state != "ended")) {
                $(this).addClass("to");
                toColumn = $(this).attr("data-column");
                toRow = $(this).attr("data-row");
                // readyForSelect = false;
                $.ajax({
                    type: 'POST',
                    url: 'submitmove',
                    data: JSON.stringify({
                        board: board,
                        from: fromColumn + fromRow,
                        to: toColumn + toRow,
                    }),
                    success: function (data) {
                        console.log("");
                        console.log("black white click success");
                        console.log(data);
                        //update the board
                        if (data != false) {
                            selected = "";

                            $(".selected").removeClass('selected');
                            board = data;
                            if (board.state === "promotion") {
                                populateScreenBoard(board.pieces);
                                promoPosition = board.promoPosition;
                                $("#promo").css('visibility', 'visible');
                                $(".black,.white").addClass("hover-off");
                                select = "promo";
                            }

                            // update the notation window

                            $("#notation").html(board.moves);
                            if (board.state !== "promotion") {



                                //get computer move
                                if (board.state != "ended" && board.state != "promotion" && board.state != "promoted") {
                                    readyForSelect = false;
                                    $.ajax({
                                        type: 'POST',
                                        url: 'getrandommove',
                                        data: JSON.stringify({board: board}),
                                        success: function (data) {
                                            board = data;
                                            $("#notation").html(board.moves);
                                            console.log("");
                                            console.log("random move success inside black white clicj success");
                                            console.log("random move " + JSON.stringify(board));
                                            populateScreenBoard(board.pieces);


                                            readyForSelect = true;
                                        },
                                        contentType: "application/json",

                                    });
                                }
                            }


                            if (board.state === "ended") {
                                $(".black,.white").addClass("hover-off");
                            }


                        } else {
                            // data = false
                            $("td").removeClass("selected");
                            selected = "";

                        }
                        readyForSelect = true;

                    },
                    contentType: "application/json",

                });
                readyForSelect = true;

                //alert(fromColumn + fromRow + " - " + toColumn + toRow);
                select = "from";
            }
            if (selected === "") {
                selected = "from";
                $(this).addClass("selected from");
                fromColumn = $(this).attr("data-column");
                fromRow = $(this).attr("data-row");
            }
        });
    })


});

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

