

    $(document).ready(function() {
        $('#search-now').on("click", function(event) {
          event.preventDefault();
          var city = $('.city-search').val().trim();
          fetchSearchResults(city);
        });

        function fetchSearchResults(city) {
          var queryURL = "https://api.eventful.com/json/events/search?app_key=XRnv6H2q8DBfgngW&location=" + city + "&keywords=pets";
          // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cars + "&api_key=C93K78HQ2rcQ97dNx87OnVuAYjvvpJtb&limit=10&offset=0&rating=PG&lang=en";

          //Creating an Ajax call for the button being click
          $.ajax({
            method: "GET",
            url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
          })
          .then(function(cookie) {
            var results = JSON.parse(cookie).events;
            var resultsDiv = $('#resultDiv');
            resultsDiv.empty();

            for (var i = 0; results.event.length; i++) {
              var url = results.event[i].url || '';
              var city_name = results.event[i].city_name || '';
              var region_name = results.event[i].region_name || '';
              var description = results.event[i].description || 'No description found.';
              var title = results.event[i].title || '';
              var start_date = results.event[i].start_date || '';

              resultsDiv.append('<div><hr>' + 'URL: ' + url + '<br>' + 'City: ' + city_name + '<br>' + 'State: ' + region_name + '<br> ' + 'Description: ' + description + '<br>' +
                'Title: ' + title + '<br>' + 'Start Date: ' + start_date + '</div>');
            }
          });
        }
      }); //End of document ready function
