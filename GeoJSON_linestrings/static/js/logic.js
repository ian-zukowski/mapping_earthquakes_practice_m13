// Add console.log to check to see if our code is working.
console.log("working");


// We create the streets tile layer that will be the background of our map.
let daynav_layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let nightnav_layer = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both map styles
let baseMaps = {
    Day: daynav_layer,
    Night: nightnav_layer
};

// Create the map object with a center and zoom level.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [nightnav_layer]
});

// Pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// Import majorAirports and toronto json data
let airportData = "https://raw.githubusercontent.com/ian-zukowski/mapping_earthquakes_practice_m13/main/torontoRoutes.json";
let torontoData = "https://raw.githubusercontent.com/ian-zukowski/mapping_earthquakes_practice_m13/main/torontoRoutes.json"

// Create map formatting option dictionary
let myStyle = {
    color: "#ffffa1",
    weight: 2
};

// d3.json(airportData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data
//     L.geoJSON(data, {
//         onEachFeature: function(feature, layer) {
//             console.log(layer);
//             layer.bindPopup("<h3>Airport Code: "+feature.properties.faa+"</h3> <hr> <h3> Airport Name: <br>"+feature.properties.name+"</h3>");
//         }
//     }).addTo(map);
// });

d3.json(torontoData).then(function(data) {
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature,layer) {
            layer.bindPopup("<h2> Destination: "+feature.properties.dst)
        }
    }).addTo(map);
});
// CODE FOR MAPPING ONE SPECIFIC POINT USING GEOJSON

// let sanFranAirport = 
// {"type":"FeatureCollection", "features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Add a popup to SFO including city, name, and FAA properties
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>"+feature.properties.city+"</h2> <hr> <h3>"+feature.properties.name+'<br> "'+feature.properties.faa+'"</h3>');
//     }
// }).addTo(map);


// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>"+feature.properties.city+"</h2> <hr> <h3>"+feature.properties.name+'<br> "'+feature.properties.faa+'"</h3>');
//     }
// }).addTo(map);