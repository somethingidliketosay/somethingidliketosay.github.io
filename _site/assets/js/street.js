var panorama;
function initialize() {
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('map'),
        {
            position: {lat: 37.855440, lng: -122.223562},
            pov: {heading: 90, pitch: 0},
            zoom: 1
            });
    }
