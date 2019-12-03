/**
 *   CityListComponent which renders individual city objects as HTML
 */

import { useCity } from "./cityDataProvider.js"

import CityComponent from "./city.js"



const CityListComponent = () => {
    const cities = useCity()
    const contentElement = document.querySelector(".content__cities")
    contentElement.innerHTML += `
        <section class="cityList">
            ${
                cities.map(city => CityComponent(city)).join("")
            }
        </section>
        
    `
    
}

export default CityListComponent

