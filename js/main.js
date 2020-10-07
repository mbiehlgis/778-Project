var map;

function createMap(){
    // create map and set parameters
     map = L.map('mapid', {
        center: [36.20, 136.25],
        zoom: 2,
        minZoom: 4,
        maxZoom: 8,
        maxBounds: [(25.2, 115.7), (45.7, 155.54)],
    });

                                //Potential Dark Mode Map//
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    	subdomains: 'abcd',
    	maxZoom: 30
    }).addTo(map);
    map.zoomControl.setPosition('bottomright');

    };






















//Loads map when all functions run and are ready for display
$(document).ready(createMap);
