interface IVenue {
  name: string;
}

const venues: IVenue[] = [
  { name: "9:30 Club" },
  { name: "DC9" },
  { name: "The Anthem" },
  { name: "U Street Music Hall" },
  { name: "Rock & Roll Hotel" }
];

const appendVenues = (venues: IVenue[]) => {
  const contentDiv = document.querySelector<HTMLElement>("#content");
  venues.forEach(venue => {
    const venueLi = document.createElement("li");
    venueLi.textContent = venue.name;
    if (contentDiv) contentDiv.appendChild(venueLi);
  });
};

appendVenues(venues);
