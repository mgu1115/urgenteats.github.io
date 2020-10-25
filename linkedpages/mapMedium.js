function initMap() {
    // the map
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 30.2863, lng: -97.7224 },
        zoom: 13,
    });
    const infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);
    // marker
    const requestDaiDue = {
        placeId: "ChIJsx9cWey1RIYRpeZVdPR4YtA",
        fields: ["name", "formatted_address", "geometry"],
    };
    service.getDetails(requestDaiDue, (place, status) => {
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
    const requestSipPho = {
        placeId: "ChIJLSGs0f-1RIYRlwjlliTQY0Q",
        fields: ["name", "formatted_address", "geometry"],
    };
    service.getDetails(requestSipPho, (place, status) => {
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
    const requestHooversCooking = {
        placeId: "ChIJtbH2SZO1RIYRb9rykmS8BJw",
        fields: ["name", "formatted_address", "geometry"],
    };
    service.getDetails(requestHooversCooking, (place, status) => {
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