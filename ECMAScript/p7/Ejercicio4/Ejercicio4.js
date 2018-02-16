var mapa = new Object();


mapa.iniciarMapa= function() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
    
var infoWindow = new google.maps.InfoWindow({map: map});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
     };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Te encuentras aquí.');
            map.setCenter(pos);
          }, function() {
            mapa.error(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          mapa.error(false, infoWindow, map.getCenter());
        }
      }

mapa.error=function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
