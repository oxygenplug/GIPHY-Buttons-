$(document).ready(function () {

    var topics = ["kitten", "otter", "hamster", "tiger", "sea lion", "deer", "cow", "puppy", "rhino", "red panda", "bear", "fox"];
    var q;
    var limit;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=h2N79rtezvgGLtt93IensMlolfBA38ED&q=" + q + "&limit=" + limit + "&offset=0&rating=G&lang=en"



    function createButtons() {
        for (var i = 0; i < topics.length; i++) {
            console.log("hi")
            $('#btnCol').append("<button type='button'>" + topics[i] + "</button>").addClass("btn btn-info");
        }

    };

    createButtons();

    $.ajax({
        url: queryURL,
        method: "GET",

    })
        .then(function (response) {
            console.log(response)
            function createGifs () {
                $(".btn").on("click", function() {
                    q = $(".btn").val();
                })




            };

            function pausePlay() {
                $(".btn").on("click", function () {
                    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                    var state = $(this).attr("data-state");
                    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                    // Then, set the image's data-state to animate
                    // Else set src to the data-still value
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                });

            }



        });



























})
