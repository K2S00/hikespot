var searches = [];
var currentCity = document.getElementById("#searched-city");


function fetchCity(cityName) {
    
    // var baseUrl = `http://dev.virtualearth.net/REST/v1/Locations?q=${cityName}`;
    // var endPoint = "&output=xml&key=";
    // var apiKey = "Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl";
    // var url = baseUrl + cityName + endPoint + apiKey;

    // fetch(url)
    // .then(function(response) {
    // var cityUrl = response.url
    // renderSearchResults(cityUrl)
    // })
   
}
    // .then(response =>
    //   console.log(response.json())
    // .then((results) => {
    //     console.log(results)
      


function renderSearchResults(data) {

    console.log(data)
    var longitude = data.coord.lon;
    var latitude = data.coord.lat;
    var myMap = document.getElementById("iframe-id")
//     var iframe = document.createElement("iframe")
//     // iframe.addClassList("map")
    myMap.setAttribute("src", `https://api.mapbox.com/styles/v1/bmarsenault/ckw34glfm2bug14rxhvtvqzn4.html?title=false&access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA&zoomwheel=true#10.13/${latitude}/${longitude}`)
//     // iframe.appendChild(myMap)

}


var searchEl = document.getElementById("search");
var cityInputEl = document.getElementById("city-name");

// var weatherDiv = document.getElementById("weather-div")
// weatherDiv.hide();

document.getElementById("weather-div").style.display = "none";

// search function
var searchHandler = function(event) {
    event.preventDefault();
    var cityName = cityInputEl.value.trim();
    console.log(cityName);
    if (cityName) {
        // saveSearch();
        getCurrentWeather();
        fetchCity(cityName);
        document.getElementById("weather-div").style.display = "block";
        cityInputEl.value = "";
    } else {
        alert("Please search for a city.");
    }
};

// fetch and display location weather
var getCurrentWeather = function() {
    // format the github api url
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl.value.trim() + '&appid=e58ce6fcd378144b93c4b6f45a5073c8';
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(data) {
            console.log(data);
            removePlaylist();
            getCityCoordinates(data);
            renderSearchResults(data);

            function removePlaylist() {
            var playlist = document.getElementById("playlist");
            var iframe = document.getElementById("iframe");
            if (iframe !== null) {
              iframe.remove();
              displayWeather(data);
            } else {
              console.log("No playlist")
              displayWeather(data);
              };
            };
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function(error) {
        alert('Unable to connect to OpenWeather.');
      });
  };

  

  function displayWeather(data) {
    // temp,  wind, humidity
    // convert from K to F
    var temp = Math.round(((data.main.temp - 273.15) * 1.8) + 32);
    // convert from m/s to mph
    var wind = (data.wind.speed * 2.237).toFixed(2);
    var humidity = data.main.humidity;
    var condition = data.weather[0].main;
    console.log(temp);
    console.log(wind);
    console.log(humidity);
    console.log(condition);
    
    var tempEl = document.getElementById("condition");
    tempEl.innerHTML = condition;

    var tempEl = document.getElementById("temp");
    tempEl.innerHTML = "Temperature: " + temp + "°F";

    var windEl = document.getElementById("wind");
    windEl.innerHTML = "Wind: " + wind + " mph";

    var humidityEl = document.getElementById("humidity");
    humidityEl.innerHTML = "Humidity: " + humidity + "%";

    var cityNameEl = document.getElementById("search-term");
    cityNameEl.innerHTML = data.name + ", " + data.sys.country;

    if (data.length === 0) {
        cityInfoEl.textContent = "No city found.";
        return;
    };


    displayPlaylist();
  
    function displayPlaylist() {   
    
    var playlist = document.getElementById("playlist");
    var iframe = document.createElement('iframe');
    
    if (condition === "Clear") {
    iframe.id = "iframe" 
    iframe.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX1BzILRveYHb?utm_source=generator" 
    iframe.width="100%" 
    iframe.height="400" 
    iframe.frameBorder="0" 
    iframe.allowfullscreen="" 
    iframe.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    playlist.appendChild(iframe);

    } else if (condition === "Clouds") {
    
    iframe.id = "iframe"
    iframe.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DWYoDXiQsd3D2?utm_source=generator" 
    iframe.width="100%" 
    iframe.height="400" 
    iframe.frameBorder="0" 
    iframe.allowfullscreen="" 
    iframe.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    playlist.appendChild(iframe);

    } else if (condition === "Rain") {
    
    iframe.id = "iframe"
    iframe.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DXbvABJXBIyiY?utm_source=generator" 
    iframe.width="100%" 
    iframe.height="400" 
    iframe.frameBorder="0" 
    iframe.allowfullscreen="" 
    iframe.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    playlist.appendChild(iframe);

    } else if (condition === "Snow") {
    
    iframe.id = "iframe"
    iframe.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX97m5YXQMpCi?utm_source=generator" 
    iframe.width="100%" 
    iframe.height="400" 
    iframe.frameBorder="0" 
    iframe.allowfullscreen="" 
    iframe.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    playlist.appendChild(iframe);

    } else {
    
    iframe.id = "iframe"
    iframe.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DXdxcBWuJkbcy?utm_source=generator" 
    iframe.width="100%" 
    iframe.height="400" 
    iframe.frameBorder="0" 
    iframe.allowfullscreen="" 
    iframe.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    playlist.appendChild(iframe);

    }
  };
};

searchEl.addEventListener("submit", searchHandler);

function getCityCoordinates(data) {
    var longitude = data.coord.lon;
    var latitude = data.coord.lat;
    console.log(longitude);
    console.log(latitude);    
}




// function saveSearch() {
//     var cityList = JSON.parse(localStorage.getItem("City-List"));
//     if (!cityList) {
//         savedItems.push(cityName);        
//         localStorage.setItem("City-List", JSON.stringify(savedItems));
//     } else {
//         cityList = JSON.parse(localStorage.getItem("City-List"));
//         savedItems = cityList;
//         savedItems.push(cityName);        
//         localStorage.setItem("City-List", JSON.stringify(savedItems));
//     };
// };    

searchEl.addEventListener("submit", searchHandler);





// const url = 'http://dev.virtualearth.net/REST/v1/LocalSearch/?query=Locations=${query}&key=Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl';


//_________________ Graveyard (Api Keys/Old functions)



// let map;

// function initMap() {
//   const localContextMapView = new google.maps.localContext.LocalContextMapView({
//     element: document.getElementById("map"),
//     placeTypePreferences: [
//       { type: "restaurant" },
//       { type: "tourist_attraction" },
//     ],
//     maxPlaceCount: 12,
//   });

//   map = localContextMapView.map;
//   map.setOptions({
//     center: { lat: 51.507307, lng: -0.08114 },
//     zoom: 14,
//   });
//   console.log(map)
// }

// Show places now.
// localContextMapView.maxPlaceCount = 12;

// initMap();


// function saveSearch() {
//     var cityList = JSON.parse(localStorage.getItem("City-List"));
//     if (!cityList) {
//         savedItems.push(cityName);        
//         localStorage.setItem("City-List", JSON.stringify(savedItems));
//     } else {
//         cityList = JSON.parse(localStorage.getItem("City-List"));
//         savedItems = cityList;
//         savedItems.push(cityName);        
//         localStorage.setItem("City-List", JSON.stringify(savedItems));
//     };
// };    


// // add eventlistener to button
// const button = document.getElementById("searchbtn");

// button.addEventListener("click", savedCity);


// //  store and get city to and from localStorage
// function getCity() {
//     return localStorage.getItem("searchedCity")
// }

// function savedCity() {
//     var city = document.getElementById("searched-city").value;

//     localStorage.setItem("searchCity", city);
//     // console.log("Clicked Button");
// };


// const url = 'http://dev.virtualearth.net/REST/v1/LocalSearch/?query=Locations=${query}&key=Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl';


// save to input to localStorage to grab for weather and map
// var input = document.getElementById('saveServer').value;
// localStorage.setItem('server', input);

//and to get the text back we would use
//(document.getElementById('saveServer').value = localStorage.getItem('server');)


// https://api.mapbox.com/styles/v1/bmarsenault/ckw34glfm2bug14rxhvtvqzn4.html?title=view&access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA&zoomwheel=true&fresh=true#5.13/37.9/-97.28
// <iframe width='100%' height='400px' src="https://api.mapbox.com/styles/v1/bmarsenault/ckw34glfm2bug14rxhvtvqzn4.html?title=false&access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA&zoomwheel=false#5.13/37.9/-97.28" title="Outdoors" style="border:none;"></iframe>
// mapbox://styles/bmarsenault/ckw34glfm2bug14rxhvtvqzn4
// apiKey = pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA
// https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoiYm1hcnNlbmF1bHQiLCJhIjoiY2t2dmlqNTd3NmUzdDMxczE3eDZhbWZ6cSJ9.Xdpp-ALevFxYRQnHx5BwhA


// map api

// bing maps
// var url = "http://dev.virtualearth.net/REST/v1/Locations?q="
// parameter = city searched
// var endPoint = "&output=xml&key=""
// var apiKey = "Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl"
// http://dev.virtualearth.net/REST/v1/Locations?q=seattle&output=xml&key=Aqy96zlGbO5ltS3p1E6aAKMleaGy0i_tu7rKfSRVU2KNtGBZIgpR87I5x61ct6Bl