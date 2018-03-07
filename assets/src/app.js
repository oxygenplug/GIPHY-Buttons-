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
                    var gifName="original";
                    var stillName="480w_still";
                    var gifData = new GifData(images[gifName].url, images[stillName].url, response.data[index].rating);
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
                        gifContainer.prepend("<br>" + "<p>" + "Rating: " + gifDatas[i].rating + "</p>");
                    }
                };

            });

    });



    $("img").on("click", function() {
        console.log("hi");
        function playPause() {
            isGif = true;
            if(isGif){
                $("img ").attr("src", gifDatas.stillUrl);
            }
    };


    });
    

});
