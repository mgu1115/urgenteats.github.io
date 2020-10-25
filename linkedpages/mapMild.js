function initMap() {
    // the map
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 30.2863, lng: -97.7424 },
      zoom: 11.5,
    });
    const infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);
    // marker
    const requestPinch = {
      placeId: "ChIJVc9UGXi1RIYRbLbCcAAKCow",
      fields: ["name", "formatted_address", "geometry"],
    };
    service.getDetails(requestPinch, (place, status) => {
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
    const request101TH = {
      placeId: "ChIJe9f5BDfKRIYRGvnezyF3buY",
      fields: ["name", "formatted_address", "geometry"],
    };
    service.getDetails(request101TH, (place, status) => {
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
    const requestContigo = {
      placeId: "ChIJfVS3YOO1RIYRa4mDmjrSoPQ",
      fields: ["name", "formatted_address", "geometry"],
    };
    service.getDetails(requestContigo, (place, status) => {
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