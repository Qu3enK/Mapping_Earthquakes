// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([36.1733, -120.1794], 5);

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.641766, -73.780968]
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    weight: 4,
    fillOpacity: 0.5,
    color: 'blue',
    dashArray: '5, 10'
}).addTo(map);



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);