$(document).ready(function () {

    //Array of pets
    var petsArray = ["cat", "dog",];
    

    // Fucntion for displaying the pets data
    function renderBtn() {

        //Deleting the pets prior to adding new pets    
        $("#buttons-view").empty();

        //Looping the array of pets
        for (var i = 0; i < petsArray.length; i++) {

            // Then dynamicaly generating buttons for each movie in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");

            //Adding a class of the pets-btn to our button
            a.addClass("pets-btn");

            //Adding data attribute
            a.attr("data-name", petsArray[i]);

            //Adding the text button text
            a.text(petsArray[i]);

            //Adding the button to the button view div
            $("#buttons-view").append(a);
        }






    }
    //Function handles events where button is clicked
    $('#add-pets').on("click", function (event) {
        event.preventDefault();
        //Line grabs the input from the textbox and takes out spaces from the outside
        var gif = $("#pets-input").val().trim();
        if (gif == "") {
            alert("You must enter a value fool!");
        } else {
            //Adds pets from the textbox to the array
            petsArray.push(gif);
            // clear input box
            $("#cars-input").val("");
            console.log(petsArray);
        }
        //Recalling the renderBtn function to display the inital buttons
        renderBtn();
    });
    // grabs the class of gif and returns the user input with the correct gif //
    $(document).on("click", "#pets-btn", function (event) {
        event.preventDefault();
        // remove prior gifs //
        $('.pet-info').empty();
        var pets = $("#pets-input").val().trim();
        console.log(pets);
        // var cars = $('#pets-input').val().trim();
        var queryURL = " http://api.petfinder.com/pet.find?&key=af4f1bad7b7c2e0582a6fbfff43c9255&format=json&location=32819&animal=" + pets;
        //Creating an AJax call for the specific pet button being click
        $.ajax({
            url: queryURL,

            method: "GET"
        }).then(function (fetch) {
            var results = fetch;
            var innerResult = results.petfinder.pets.pet
            console.log(results)
            
            for (let i = 0; i < innerResult.length; i++) {
                const element = innerResult[i];
                var ourBreeds = [];
                const breeds = element.breeds.breed;
                for (let x = 0; x < breeds.length; x++) {
                    const breed = breeds[x].$t;
                    ourBreeds.push(breed)
                    
                }
                var petImage = ""
                if (element.media.photos) { 
                    petImage = $("<img>").attr("src", element.media.photos.photo[2].$t);
                
                    
                }
            

                
                var q = $("<p>").text("Breed: " + ourBreeds);
                 var p = $("<p>").text("Age: " + element.age.$t);
                 var r = $("<p>").text("City: " + element.contact.city.$t);
                 var s = $("<p>").text("Size: " + element.size.$t);
                 var t = $("<p>").text("Sex: " + element.sex.$t);

                 $(".pet-info").append(petImage)
                 $(".pet-info").append(q);
                 $(".pet-info").append(p);
                 $(".pet-info").append(r);
                 $(".pet-info").append(s);
                 $(".pet-info").append(t);
                 $(".pet-info").append(" ")
                 

            }



            console.log(innerResult);
            //Displaying the rating

            // loop through our results //
            for (var i = 0; i < results.length; i++) {
                // assign variable to gif url //
                var photos = results[i].media.photos.photo;
                // var still = results[i].images.fixed_height_still.url;
                //Storing the rating data
                // var rating = results[i].rating;
                // console.log("Rating: " + rating);

                // create image //
                var gifImage = $("<img>");
                gifImage.addClass("pics");
                //gifImage.attr('src', still);
                //gifImage.attr('data-still', still);
                // gifImage.attr('data-animated', animated);

                // gifImage.attr('data-state', "@size");???????
                //Retrieving the URL for the image
                var imgURL = results[i].photos.fixed_height.url;
                console.log("URL: " + imgURL);
                //Displaying the rating
                // var p = $("<p>").text("Rating: " + rating);
                //Creating element to hold the image
                var image = $("<img>").attr("src", imgURL);
                //Appending the image
                $('#test1').append(gifImage);
                $('#test1').append(p);

            }
        });

    });
    $(document).on("click", ".dog", function (event) {
        event.preventDefault();
        // remove prior gifs //
        $('.pet-info').empty();
       
        // var cars = $('#pets-input').val().trim();
        var queryURL = " http://api.petfinder.com/pet.find?&key=af4f1bad7b7c2e0582a6fbfff43c9255&format=json&location=32819&animal=dog";
        //Creating an AJax call for the specific pet button being click
        $.ajax({
            url: queryURL,

            method: "GET"
        }).then(function (fetch) {
            var results = fetch;
            console.log(results);
            var innerResult = results.petfinder.pets.pet;
            // console.log(results)
            
            for (let i = 0; i < innerResult.length; i++) {
                const element = innerResult[i];
                var ourBreeds = [];
                const breeds = element.breeds.breed;
                for (let x = 0; x < breeds.length; x++) {
                    const breed = breeds[x].$t;
                    ourBreeds.push(breed)
                    
                }
                var petImage = ""
                if (element.media.photos) { 
                    petImage = $("<img>").attr("src", element.media.photos.photo[2].$t);
                
                    
                }
            

                
                var q = $("<p>").text("Breed: " + ourBreeds);
                 var p = $("<p>").text("Age: " + element.age.$t);
                 var r = $("<p>").text("City: " + element.contact.city.$t);
                 var s = $("<p>").text("Size: " + element.size.$t);
                 var t = $("<p>").text("Sex: " + element.sex.$t);

                 $(".pet-info").append(petImage)
                 $(".pet-info").append(q);
                 $(".pet-info").append(p);
                 $(".pet-info").append(r);
                 $(".pet-info").append(s);
                 $(".pet-info").append(t);
                 $(".pet-info").append(" ")
                 

            }



            console.log(innerResult);
            //Displaying the rating

            // loop through our results //
            for (var i = 0; i < results.length; i++) {
                // assign variable to gif url //
                var photos = results[i].media.photos.photo;
                // var still = results[i].images.fixed_height_still.url;
                //Storing the rating data
                // var rating = results[i].rating;
                // console.log("Rating: " + rating);

                // create image //
                var gifImage = $("<img>");
                gifImage.addClass("pics");
                //gifImage.attr('src', still);
                //gifImage.attr('data-still', still);
                // gifImage.attr('data-animated', animated);

                // gifImage.attr('data-state', "@size");???????
                //Retrieving the URL for the image
                var imgURL = results[i].photos.fixed_height.url;
                console.log("URL: " + imgURL);
                //Displaying the rating
                // var p = $("<p>").text("Rating: " + rating);
                //Creating element to hold the image
                var image = $("<img>").attr("src", imgURL);
                //Appending the image
                $('#test1').append(gifImage);
                $('#test1').append(p);

            }
        });

    });
    $(document).on("click", ".cat", function (event) {
        event.preventDefault();
        // remove prior gifs //
        $('.pet-info').empty();
       
        // var cars = $('#pets-input').val().trim();
        var queryURL = " http://api.petfinder.com/pet.find?&key=af4f1bad7b7c2e0582a6fbfff43c9255&format=json&location=32819&animal=cat";
        //Creating an AJax call for the specific pet button being click
        $.ajax({
            url: queryURL,

            method: "GET"
        }).then(function (fetch) {
            var results = fetch;
            console.log(results);
            var innerResult = results.petfinder.pets.pet;
            // console.log(results)
            
            for (let i = 0; i < innerResult.length; i++) {
                const element = innerResult[i];
                var ourBreeds = [];
                const breeds = element.breeds.breed;
                for (let x = 0; x < breeds.length; x++) {
                    const breed = breeds[x].$t;
                    ourBreeds.push(breed)
                    
                }
                var petImage = ""
                if (element.media.photos) { 
                    petImage = $("<img>").attr("src", element.media.photos.photo[2].$t);
                
                    
                }
            

                
                var q = $("<p>").text("Breed: " + ourBreeds);
                 var p = $("<p>").text("Age: " + element.age.$t);
                 var r = $("<p>").text("City: " + element.contact.city.$t);
                 var s = $("<p>").text("Size: " + element.size.$t);
                 var t = $("<p>").text("Sex: " + element.sex.$t);

                 $(".pet-info").append(petImage)
                 $(".pet-info").append(q);
                 $(".pet-info").append(p);
                 $(".pet-info").append(r);
                 $(".pet-info").append(s);
                 $(".pet-info").append(t);
                 $(".pet-info").append(" ")
                 

            }



            console.log(innerResult);
            //Displaying the rating

            // loop through our results //
            for (var i = 0; i < results.length; i++) {
                // assign variable to gif url //
                var photos = results[i].media.photos.photo;
                // var still = results[i].images.fixed_height_still.url;
                //Storing the rating data
                // var rating = results[i].rating;
                // console.log("Rating: " + rating);

                // create image //
                var gifImage = $("<img>");
                gifImage.addClass("pics");
                //gifImage.attr('src', still);
                //gifImage.attr('data-still', still);
                // gifImage.attr('data-animated', animated);

                // gifImage.attr('data-state', "@size");???????
                //Retrieving the URL for the image
                var imgURL = results[i].photos.fixed_height.url;
                console.log("URL: " + imgURL);
                //Displaying the rating
                // var p = $("<p>").text("Rating: " + rating);
                //Creating element to hold the image
                var image = $("<img>").attr("src", imgURL);
                //Appending the image
                $('#test1').append(gifImage);
                $('#test1').append(p);

            }
        });

    });
    //Adding click listener to all elements with a class "car-btn"
    $(document).on("click", ".giphys", function () {
        var state = $(this).attr('data-state');
        console.log(this);
        if (state == "still") {
            $(this).attr('src', $(this).attr('data-animated'));
            $(this).attr('data-state', "animated");
        } else {
            $(this).attr('src', $(this).attr('data-still'));
            $(this).attr('data-state', "still");
        }
    });
    // Calling the renderButtons function to display the intial buttons
    renderBtn();

}); //end of document ready





function breed() {

    //Deleting the pets prior to adding new pets    
    $("#buttons-view").empty();

    //Looping the array of pets
    for (var i = 0; i < breed.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var b = $("<button>");

        //Adding a class of the pets-btn to our button
        b.addClass("pets-btn");

        //Adding data attribute
        b.attr("data-name", breed[i]);

        //Adding the text button text
        b.text(breed[i]);

        //Adding the button to the button view div
        $("#buttons-view").append(a);
    }





};


//124-147 creates function to display change the name.
//have to do that for breed...done gender age distance and size.

//create a function
