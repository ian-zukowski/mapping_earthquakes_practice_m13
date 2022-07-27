// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


let cityData = cities;

// Loop through the cities array and put a map marker for each item based on the 'location' key/value pair
cityData.forEach(city => {
    L.circleMarker(city.location, {
        radius: (city.population-200000)/100000,
        color:"orange",
        fillOpacity:0.2,
        weight: 4
    })
    .bindPopup("<h2>"+city.city+", "+city.state+"</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});


// Add flight path L.A. to San Fran
// Set start/end location coordinates
let line = [
    [33.9416,-118.4085], [37.6213,-122.3790]
];

// Use polyline to create the line between the endpoints and add to map
L.polyline(line, {color: "red"}).addTo(map);

// Flight path with multiple endpoints
// Coordinates for each point to be used in the polyline.
let line2 = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

L. polyline(line2, {color: "blue"}).addTo(map);
L.polyline(line, {color: "green"}).addTo(map);

let line3 = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

L.polyline(line3, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    stroke: "false",
    linecap: "round",
    dashArray: 10,
    style: "dashed"
}).addTo(map);