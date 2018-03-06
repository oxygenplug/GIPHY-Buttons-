var topics = ["kitten", "otter", "hamster", "tiger", "sea lion", "deer", "cow", "puppy", "rhino", "red panda", "bear", "fox"];

var limit;


$(document).ready(function () {

    function createButtons() {
        for (var i = 0; i < topics.length; i++) {
            console.log("hi")
            $('#btnCol').append("<button type='button'>" + topics[i] + "</button>").addClass("btn btn-info");
        }

    };

    createButtons();

    function GifData(gifUrl, stillUrl) {

        this.gifUrl = gifUrl;
        this.stillUrl = stillUrl;
    }

    var gifDatas = [];

    $("button").on("click", function () {

        var q = $(this).text();
        console.log(q);
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=h2N79rtezvgGLtt93IensMlolfBA38ED&q=" + q + "&limit=10&offset=0&rating=G&lang=en";

        $.ajax({

            url: queryURL,
            method: "GET",

        })
            .then(function (response) {
                console.log(response)

                var gifDatas = [];

                for (var index in response.data) {
                    var images = response.data[index].images;
                    var gifData = new GifData(images["original"].url, images["480w_still"].url);
                    gifDatas.push(gifData)
                    displayGifs();


                };

                function displayGifs () {
                    for(var i = 0; i < gifDatas.length; i++) {
                        var gu = gifDatas[i].gifUrl;
                            $("#gifCol").prepend("<img src='" + gifDatas.gifUrl + "'>" );


                    }
                };




                function pausePlay() {
                    $("button").on("click", function () {
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

    });


});
