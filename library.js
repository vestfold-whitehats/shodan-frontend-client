function showMe(){
$.getJSON("https://api.shodan.io/shodan/host/search?key=" + $("#api").val() + "&query=" + $("#query").val(),
   function(data) {
   var i = 0;
     jQuery.each(data.matches, function() {
     		var latlng = L.latLng(this.location.latitude, this.location.longitude);
     		console.info(latlng)
     		L.marker(latlng).addTo(map);
		});         
     alert('done');
   });
}