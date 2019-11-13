function init(){
	//alert('it works');
	var la = document.getElementById('canvas');
	var myCity = new google.maps.LatLng(41.881832,-87.623177);
	var mapOptions = {
		center: myLocation,myLocation2,myLocation1,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};
	var theMap = new google.maps.Map(la, mapOptions);

	var marker = new google.maps.Marker({
		position: myCity,
		map: theMap,
		animation: google.maps.Animation.BOUNCE,
		
	});
	var contentString = '<h1> Chicago </h1><p> My city</p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});
	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});