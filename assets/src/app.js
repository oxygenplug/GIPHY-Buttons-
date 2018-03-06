var topics = ["kitten", "otter", "hamster", "tiger", "sea lion", "deer", "cow", "puppy", "rhino", "red panda", "bear", "fox"];

var limit;


$(document).ready(function () {
    // creates a button for each string in the array
    function createButtons() {
        for (var i = 0; i < topics.length; i++) {
            console.log("hi")
            $('#btnCol').append("<button type='button'>" + topics[i] + "</button>").addClass("btn btn-info");
        }

    };

    createButtons();
    // constructor to pull gif data from the returned JSON obj
    function GifData(gifUrl, stillUrl, rating) {

        this.gifUrl = gifUrl;
        this.stillUrl = stillUrl;
        this.rating = rating;
    }
    // array to store the gif data values
    var gifDatas = [];

    $("button").on("click", function () {

        var q = $(this).text();
        console.log(q);
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=h2N79rtezvgGLtt93IensMlolfBA38ED&q=" + q + "&limit=10&offset=0&rating=G&lang=en";
        //ajax call
        $.ajax({

            url: queryURL,
            method: "GET",

        })
            .then(function (response) {
                console.log(response)

                var gifDatas = [];
                // goes through each index in response.data
                for (var index in response.data) {
                    //sets images to the images index in the data array
                    var images = response.data[index].images;
                    // sets the gifData array a new GifData object which pulls the url for the gif and the still image
                    var propName="original"
                    var gifData = new GifData(images[propName].url, images["480w_still"].url, response.data[index].rating);
                    //pushes gifData to the gifDatas array
                    gifDatas.push(gifData)
                    // runs the function to display gifs
                    displayGifs();


                };

                function displayGifs() {
                    $("#gifCol").empty();
                    for (var i = 0; i < gifDatas.length; i++) {
                        var gu = gifDatas[i].gifUrl;
                        console.log(gu);
                        var gifContainer = $("#gifCol");
                        gifContainer.prepend("<img src='" + gu + "'>");
                        gifContainer.append("<br>" + "<p>" + "Rating: " + gifDatas[i].rating + "</p>");
                        



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
