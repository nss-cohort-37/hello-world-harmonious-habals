import { useCities } from "./citiesDataProvider.js";
import CityComponent from "./cities.js";

const citiesListComponent = () => {
  const cityData = useCities();
  const contentElement = document.querySelector(".content");

  contentElement.innerHTML += `
    <section class="content__cities highlight">
    <h3>Cities</h3>
    <ul>
      ${cityData
        .map(currentCity => {
          return CityComponent(currentCity);
        })
        .join("")}
    </ul>
    </section>`;
};

export default citiesListComponent;