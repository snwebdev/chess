

$//("#promo").hide();

var board;
var promoPosition;
var select;
//get board from server
$(document).ready(function () {
    $.getJSON('newgame', function (data) {
        board = data;
        var pieces = board.pieces;
//populateScreenBoard(pieces);
       // populate screen board
        pieces.forEach((piece) => {
            var row = piece.row;
            var column = piece.column;
            var colour = piece.colour;
            var denomination = piece.denomination
            $("td[data-column=" + column + "][data-row=" + row + "]").html("<div class=" + colour + "-" + denomination + "></div>");
        });

        //respond to clicks on screen board
        var fromColumn, fromRow, toColumn, toRow;
        var selected = "";

        $(".promo").click(function () {
            var denomination = this.getAttribute("data-piece");
            $.ajax({
                type: 'POST',
                url: 'promote',
                data: JSON.stringify({
                    board: board,
                    pawnPosition: promoPosition,
                    denomination: denomination
                }),
                success: function (data) {
                    console.log("promo data= " + JSON.stringify(data));
                    board = data;
                    var column = board.promoPosition.column;
                    var row = board.promoPosition.row;
                    var denomination = board.promoDenomination;


                    $("td[data-column='" + column + "'][data-row='" + row + "']").html('<div class="' + "white" + '-' + denomination + '"></div>');
                    $("#promo").css('visibility', 'hidden');
                    $(".black,.white").removeClass("hover-off");
                    select = "";
                    board.state = "";
                    delete board.promoPosition;
                    delete board.empty;
                    delete board.promoDenomination;

                    // update the notation window
                    $("#notation").html(board.moves);
                    $.ajax({
                        type: 'POST',
                        url: 'getrandommove',
                        data: JSON.stringify({board: board}),
                        success: function (data) {
                            board = data;
                            console.log("random move " + JSON.stringify(board));
                            //empty the sqaure that was vacated
                            var emptyColumn = board.empty.column;
                            var emptyRow = board.empty.row;
                            // alert(board.empty.column+board.empty.row);


                            $("td[data-column='" + emptyColumn + "'][data-row='" + emptyRow + "']").html("");
                            for (var i = 0; i < board.pieces.length; i++) {
                                var piece = board.pieces[i];
                                var denomination = piece.denomination;
                                var colour = piece.colour;


                                $("#notation").html(board.moves);


                                //alert(JSON.stringify(piece));
                                // console.log($("td[data-column='"+piece.column+"'][data-row='"+piece.row+"']").html());
                                // console.log('<div id="' + colour + '-' + denomination + '"></div>');


                                if ($("td[data-column='" + piece.column + "'][data-row='" + piece.row + "']").html() !== ('<div class="' + colour + '-' + denomination + '"></div>')) {
                                    $("td[data-column=" + piece.column + "][data-row=" + piece.row + "]").html('<div class="' + colour + '-' + denomination + '"></div>');
                                }

                                // if(piece.column === move.from.column && piece.row === move.from.row){
                                //     piece.column = move.to.column;
                                //     piece.row = move.to.row;
                                //     //alert(JSON.stringify(piece));
                                //     $("td[data-column=" + move.from.column + "][data-row=" + move.from.row + "]").html("");
                                //     pieces.forEach((piece) => {
                                //         // alert(piece);
                                //         var row = piece.row;
                                //         var column = piece.column;
                                //         var colour = piece.colour;
                                //         var denomination = piece.denomination
                                //         $("td[data-column=" + column + "][data-row=" + row + "]").html("<div id=" + colour + "-" + denomination + "></div>");
                                //     })
                                // }

                            }

                            readyForSelect = true;
                        },
                        contentType: "application/json",

                    });

                },
                contentType: "application/json",

            });

        });

        var readyForSelect = true;
        $(".black, .white").click(function () {
            if ((select != "promo") && (selected === "from" && board.state != "ended")) {
                $(this).addClass("selected to");
                toColumn = $(this).attr("data-column");
                toRow = $(this).attr("data-row");
                //alert("to " + toColumn + toRow);
                if (toColumn === fromColumn && toRow === fromRow) {
                } else {
                    readyForSelect = false;
                    $.ajax({
                        type: 'POST',
                        url: 'submitmove',
                        data: JSON.stringify({
                            board: board,
                            from: fromColumn + fromRow,
                            to: toColumn + toRow,
                        }),
                        success: function (data) {
                            //alert(JSON.stringify(data));
                            //update the board
                            if (data != false) {
                                selected = "";
                                //$(".selected").html("");
                                $(".selected").removeClass('selected');

                                $(".to").html($(".from").html());
                                $(".from").html("");
                                //alert (JSON.stringify(board));
                                board = data;
                                if (board.state === "promotion") {
                                    promoPosition = board.promoPosition;
                                    $("#promo").css('visibility', 'visible');
                                    $(".black,.white").addClass("hover-off");
                                    select = "promo";
                                }

                                //populate screen board
                                pieces = board.pieces;
                                pieces.forEach((piece) => {
                                    //alert(piece);
                                    var row = piece.row;
                                    var column = piece.column;
                                    var colour = piece.colour;
                                    var denomination = piece.denomination
                                    $("td[data-column=" + column + "][data-row=" + row + "]").html("<div class=" + colour + "-" + denomination + "></div>");

                                });

                                console.log(board);
                                // update the notation window
                                $("#notation").html(board.moves);
                                //alert(JSON.stringify(board))
                                //get computer move

                                if (board.state === "promoted") {
                                    // alert("promoted");
                                }

                                if (board.state != "ended" && board.state != "promotion" && board.state != "promoted") {
                                    readyForSelect = false;
                                    $.ajax({
                                        type: 'POST',
                                        url: 'getrandommove',
                                        data: JSON.stringify({board: board}),
                                        success: function (data) {
                                            board = data;
                                            console.log("random move " + JSON.stringify(board));
                                            //empty the sqaure that was vacated
                                            var emptyColumn = board.empty.column;
                                            var emptyRow = board.empty.row;
                                            // alert(board.empty.column+board.empty.row);


                                            $("td[data-column='" + emptyColumn + "'][data-row='" + emptyRow + "']").html("");
                                            for (var i = 0; i < board.pieces.length; i++) {
                                                var piece = board.pieces[i];
                                                var denomination = piece.denomination;
                                                var colour = piece.colour;


                                                $("#notation").html(board.moves);


                                                //alert(JSON.stringify(piece));
                                                // console.log($("td[data-column='"+piece.column+"'][data-row='"+piece.row+"']").html());
                                                // console.log('<div id="' + colour + '-' + denomination + '"></div>');


                                                if ($("td[data-column='" + piece.column + "'][data-row='" + piece.row + "']").html() !== ('<div class="' + colour + '-' + denomination + '"></div>')) {
                                                    $("td[data-column=" + piece.column + "][data-row=" + piece.row + "]").html('<div class="' + colour + '-' + denomination + '"></div>');
                                                }

                                                // if(piece.column === move.from.column && piece.row === move.from.row){
                                                //     piece.column = move.to.column;
                                                //     piece.row = move.to.row;
                                                //     //alert(JSON.stringify(piece));
                                                //     $("td[data-column=" + move.from.column + "][data-row=" + move.from.row + "]").html("");
                                                //     pieces.forEach((piece) => {
                                                //         // alert(piece);
                                                //         var row = piece.row;
                                                //         var column = piece.column;
                                                //         var colour = piece.colour;
                                                //         var denomination = piece.denomination
                                                //         $("td[data-column=" + column + "][data-row=" + row + "]").html("<div id=" + colour + "-" + denomination + "></div>");
                                                //     })
                                                // }

                                            }

                                            readyForSelect = true;
                                        },
                                        contentType: "application/json",

                                    });
                                }
                                if (board.state === "ended") {
                                    $(".black,.white").addClass("hover-off");
                                }


                            } else {
                                alert("Can't do that !");
                                $("td").removeClass("selected");
                                selected = "";

                            }
                            readyForSelect = true;

                        },
                        contentType: "application/json",

                    });
                    readyForSelect = true;
                }
                //alert(fromColumn + fromRow + " - " + toColumn + toRow);
                select = "from";


            }

            if (selected === "") {
                selected = "from";
                //
                //
                // alert(" slelected is from");
                $(this).addClass("selected from");

                fromColumn = $(this).attr("data-column");
                fromRow = $(this).attr("data-row");
                // alert("from " + fromColumn + fromRow);

            }
        });
    })


});

function populateScreenBoard(pieces){
    //populate screen board
    pieces.forEach((piece) => {
        var row = piece.row;
        var column = piece.column;
        var colour = piece.colour;
        var denomination = piece.denomination
        $("td[data-column=" + column + "][data-row=" + row + "]").html("<div class=" + colour + "-" + denomination + "></div>");
    });
}

