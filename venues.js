var getVenueInput = function () {
    return document.querySelector("#venue-input");
};
var getVenueList = function () {
    return document.querySelector("#venue-list");
};
var getVenueButton = function () {
    return document.querySelector("#venue-button");
};
var addButtonListener = function () {
    var venueButton = getVenueButton();
    if (venueButton)
        venueButton.addEventListener("click", handleSearch);
};
var handleSearch = function (e) {
    e.preventDefault();
    var venueInput = getVenueInput();
    if (venueInput)
        fetchVenues(venueInput.value);
};
var fetchVenues = function (venueString) {
    if (venueString.length) {
        var url = "https://api.seatgeek.com/2/venues?client_id=MTU0NDI1OTd8MTU1MDg0OTY3NS4xOQ&per_page=100&q=";
        fetch(url + venueString)
            .then(function (res) { return res.json(); })
            .then(function (json) { return appendVenues(json.venues); });
    }
    else {
        var venueList = getVenueList();
        if (venueList)
            while (venueList.firstChild) {
                venueList.removeChild(venueList.firstChild);
            }
    }
};
var appendVenues = function (venues) {
    var venueList = getVenueList();
    if (venueList) {
        while (venueList.firstChild) {
            venueList.removeChild(venueList.firstChild);
        }
        venues.forEach(function (venue) {
            var venueLi = document.createElement("li");
            venueLi.textContent = venue.name + ", " + venue.city + ", " + venue.state;
            venueList.appendChild(venueLi);
        });
    }
};
// Initialize
var initialize = function () {
    addButtonListener();
    var venueInput = getVenueInput();
    if (venueInput) {
        venueInput.focus();
    }
};
initialize();
