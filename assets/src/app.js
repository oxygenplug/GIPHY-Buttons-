$(document).ready(function () {

    var topics = ["doggos", "kitters", "water-doggos", ""];



    var queryURL =  "https://api.giphy.com/v1/gifs/search?api_key=h2N79rtezvgGLtt93IensMlolfBA38ED&q=" + q + "&limit=" + limit + "&offset=0&rating=G&lang=en"

    $.ajax ( {
       url: queryURL,
       method: "GET",

    })
        .then(function(reponse))
    
    ;



   




    function pausePlay() {
        $(".gif").on("click", function () {
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


















})
