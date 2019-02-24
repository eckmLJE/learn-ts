// Selectors

const getVenueInput = (): HTMLElement | null =>
  document.querySelector("#venue-input");

const getVenueList = (): HTMLElement | null =>
  document.querySelector("#venue-list");

const getVenueButton = (): HTMLElement | null =>
  document.querySelector("#venue-button");

// Listeners

const addButtonListener = (): void => {
  const venueButton: HTMLElement | null = getVenueButton();
  if (venueButton) venueButton.addEventListener("click", handleSearch);
};

// Event Handlers

const handleSearch = (e: Event) => {
  e.preventDefault();
  const venueInput: HTMLElement | null = getVenueInput();
  if (venueInput) fetchVenues((<HTMLInputElement>venueInput).value);
};

// Fetch

const fetchVenues = (venueString: string) => {
  if (venueString.length) {
    const url: string =
      "https://api.seatgeek.com/2/venues?client_id=MTU0NDI1OTd8MTU1MDg0OTY3NS4xOQ&per_page=100&q=";
    fetch(url + venueString)
      .then(res => res.json())
      .then(json => appendVenues(json.venues));
  } else {
    const venueList: HTMLElement | null = getVenueList();
    if (venueList)
      while (venueList.firstChild) {
        venueList.removeChild(venueList.firstChild);
      }
  }
};

// List Venues Logic

interface IVenue {
  name: string;
  city: string;
  state: string;
}

const appendVenues = (venues: IVenue[]): void => {
  const venueList: HTMLElement | null = getVenueList();
  if (venueList) {
    while (venueList.firstChild) {
      venueList.removeChild(venueList.firstChild);
    }
    venues.forEach(venue => {
      const venueLi: HTMLElement = document.createElement("li");
      venueLi.textContent = venue.name + ", " + venue.city + ", " + venue.state;
      venueList.appendChild(venueLi);
    });
  }
};

// Initialize

const initialize = () => {
  addButtonListener();
  const venueInput: HTMLElement | null = getVenueInput();
  if (venueInput) {
    venueInput.focus();
  }
};

initialize();
