import {useCities} from "/scripts/japan/cities/citiesDataProvider.js"
import CityComponent from "/scripts/japan/cities/cities.js"

const CityListComponent = () => {

  const citiesHTML = document.querySelector(".content__cities")
  const cities = useCities()

  citiesHTML.innerHTML += `
    ${cities.map(city => CityComponent(city)).join("")}
  `
}


export default CityListComponent