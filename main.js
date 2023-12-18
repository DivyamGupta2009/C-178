let latitude, longitude;

mapboxgl.accessToken = "pk.eyJ1IjoiY2xlb3BhdHJhMSIsImEiOiJjbG5idDlzM2swM3pnMmp1Zmx2eWljbDFyIn0.8jmp8LtiLdi6ekn-7sqBKw"

$(document).ready(function(){
    initGeolocation();
});



function initGeolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success);
    }else{
        alert("Sorry! Your browser does not support location services!.")
    }
}

function success(position){
    latitude =  position.coords.latitude;
    longitude = position.coords.longitude;
    
    var map = new mapboxgl.Map({
        container: 'map',
        style : 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom : 16
    })
    
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions : {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    );
    
    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    )
}

$(function(){
    $("#navigate-button").click(function(){
        console.log("button has been clicked!")
    })
})