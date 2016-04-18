function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 55.712236, lng: 37.564204},
		scrollwheel: false,
		draggable: false,
		zoom: 17,
	});

	var marker = new google.maps.Marker({
		map: map,
		position: {lat: 55.712787, lng: 37.565439},
		title: 'Hello World!',
		icon: { url: 'img/map-marker.png', size: new google.maps.Size(163, 94)}
	});

}