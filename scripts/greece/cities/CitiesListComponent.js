import { UseCities } from "./CitiesDataProvider.js";
import CitiesComponent from "./CitiesComponent.js";

const CitiesListComponent = () => {
  const citiesHTML = document.querySelector(".content");
  const useCity = UseCities();

  citiesHTML.innerHTML = `
    ${useCity.map(city => CitiesComponent(city)).join("")}
  `;
};

export default CitiesListComponent;
