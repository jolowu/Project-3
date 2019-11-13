function init(){
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.881832,-87.623177);
	var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};
	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		
	});
	var contentString = '<h1> Chicago </h1><p> My city</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});
	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});
}

google.maps.event.addDomListener(window, 'load', init);