var mymap = L.map('mapid').setView([-19.3558608, -41.6507702], 7.31);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

    function geoFindMe() {
      var output = document.getElementById("mapid");
    
    
      if (!navigator.geolocation){
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
      }
    
      function success(position) {
        var lat  = position.coords.latitude;
        var lng = position.coords.longitude;
  
        L.marker([lat, lng]).addTo(mymap).bindPopup(document.getElementById('inputFirstName'));
  
      }
    
      function error() {
        output.innerHTML = "Unable to retrieve your location";
      }
        
      navigator.geolocation.getCurrentPosition(success, error);
    }