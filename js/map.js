 function initMap() {
        var hvh = {lat: 51.980632, lng: 4.134185};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: hvh,
           styles: [
            {elementType: 'geometry', stylers: [{color: '#ffffff'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#ffffff'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#fffdff'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#98fb98'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#000000'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'snelweg',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#cd0000'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#ffffff'}]
            }
          ]


        });
        

      
      
     
        var marker = new google.maps.Marker({
         position: hvh,
         map: map,
       
      });
  
    

      }

