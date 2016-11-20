var map_wrapper = 'map_container';
var longitude = 4.744124;
var latitude = -74.042123;
var bubble_content =	"<p class='map_contacts'>" +
						"<span>Direccion : </span>" +
						"Calle 164 #19-09" +
						"</p>";





function initialize() {
	var mapOptions = {
		zoom: 16,
		center: new google.maps.LatLng(longitude, latitude),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		streetViewControl:false,
		scrollwheel : false,
		zoomControlOptions: {
	      style: google.maps.ZoomControlStyle.SMALL
	    }
	};

	var map = new google.maps.Map(document.getElementById(map_wrapper),mapOptions);

	var marker = new google.maps.Marker({
	  position:  new google.maps.LatLng(longitude, latitude),
	  map: map,
	  icon     : "img/marker.svg"
	});

	var infowindow = new google.maps.InfoWindow({
			content: bubble_content
		});

	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.open(map,marker);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
