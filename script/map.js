function init(){
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.881832,-87.623177);
	var myLocationx = new google.maps.LatLng(6.465422,3.406448);
	var myLocationy = new google.maps.LatLng(35.652832,139.839478);
	var mapOptions = {
		center: myLocation,myLocationx,myLocationy,
		zoom: 1,
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
	var marker = new google.maps.Marker({
		position: myLocationx,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		
	});
	var marker = new google.maps.Marker({
		position: myLocationy,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
		
	});
	var contentString = '<h2> Chicago </h2><h5> My city</h5>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});
	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});
}

google.maps.event.addDomListener(window, 'load', init);