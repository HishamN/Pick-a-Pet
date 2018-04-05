

    $(document).ready(function() {
        $('#search-now').on("click", function(event) {
          event.preventDefault();
          var city = $('.city-search').val().trim();
          fetchSearchResults(city);
        });

        function fetchSearchResults(city) {
          var queryURL = "https://api.eventful.com/json/events/search?app_key=XRnv6H2q8DBfgngW&location=" + city + "&keywords=pets";
          

          //Creating an Ajax call for the button being click
          $.ajax({
            method: "GET",
            url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
          })
          .then(function(cookie) {
            var results = JSON.parse(cookie).events;
            var resultsDiv = $('#resultDiv');
            resultsDiv.empty();

            //Create a loop for the API array and variables 
            //to hold the api data
            for (var i = 0; results.event.length; i++) {
              var url = results.event[i].url || 'No description found.';
              var city_name = results.event[i].city_name || 'No description found';
              var region_name = results.event[i].region_name || 'No description found';
              var description = results.event[i].description || 'No description found.';
              var title = results.event[i].title || 'No description found.';
              var start_date = results.event[i].start_date || 'No description found.';

              // resultDiv.append will append the data on the html
              resultsDiv.append(
                '<div><hr>' +
                   '<strong> Title:</strong> ' + title +
                   '<br>' +
                   ' <strong> Start Date:</strong> ' + start_date +
                   '<br>' +
                   ' <strong> City: </strong> ' + city_name +
                   '<br> ' +
                   '<strong> State: </strong> ' + region_name +
                   '<br>' +
                   '<strong>  URL: </strong> ' + url +
                   '<br>' +
                   '<strong> Description: </strong> ' + description +
                '</div> ')

  
            }
          });
        }
      }); //End of document ready function
