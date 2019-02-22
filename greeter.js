var venues = [
    { name: "9:30 Club" },
    { name: "DC9" },
    { name: "The Anthem" },
    { name: "U Street Music Hall" },
    { name: "Rock & Roll Hotel" }
];
var appendVenues = function (venues) {
    var contentDiv = document.querySelector("#content");
    venues.forEach(function (venue) {
        var venueLi = document.createElement("li");
        venueLi.textContent = venue.name;
        if (contentDiv)
            contentDiv.appendChild(venueLi);
    });
};
appendVenues(venues);
