function initMap() {
  // the map
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.2863, lng: -97.7424 },
    zoom: 12,
  });
  const infowindow = new google.maps.InfoWindow();
  const service = new google.maps.places.PlacesService(map);
  // marker
  const requestSongLa = {
    placeId: "ChIJ9_hZ6He1RIYRorGALacgt0w",
    fields: ["name", "formatted_address", "geometry"],
  };
  service.getDetails(requestSongLa, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });
      google.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          "<div><strong>" +
          place.name +
          "</strong><br>" +
          "<br>" +
          place.formatted_address +
          "</div>"
        );
        infowindow.open(map, this);
      });
    }
  });
  // marker
  const requestLuckyLab = {
    placeId: "ChIJLTGtEWC1RIYR8yoQoTIEmb8",
    fields: ["name", "formatted_address", "geometry"],
  };
  service.getDetails(requestLuckyLab, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });
      google.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          "<div><strong>" +
          place.name +
          "</strong><br>" +
          "<br>" +
          place.formatted_address +
          "</div>"
        );
        infowindow.open(map, this);
      });
    }
  });
  // marker
  const requestOddDuck = {
    placeId: "ChIJi8__nx-1RIYR56djED9FLLE",
    fields: ["name", "formatted_address", "geometry"],
  };
  service.getDetails(requestOddDuck, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });
      google.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          "<div><strong>" +
          place.name +
          "</strong><br>" +
          "<br>" +
          place.formatted_address +
          "</div>"
        );
        infowindow.open(map, this);
      });
    }
  });
}