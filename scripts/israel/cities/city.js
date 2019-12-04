
/**
 *  CityComponent which renders individual city objects as HTML
 */


const CityComponent = (city) => {
return `

<h3>Cities</h3>
    <ul>
        <li>${city.city_1}
            
           

        <li>${city.city_2}</li>
            

        <li>${city.city_3}</li>
            

        <li>${city.city_4}</li>
            

    </ul>

`
}



// <!-- cities -->
// <section class="highlight content__cities">
//     <h3>Cities</h3>
//     <ul>
//         <li>Jerusalem</li>
//         <li>Tel Aviv-Yafo</li>
//         <li>Netanya</li>
//         <li>TiberiasCity</li>
//     </ul>
// </section>


export default CityComponent

//<button id="button--${city.city_1}">Details</button>
        // <dialog class="dialog--city" id="details--${city.city_1}">
        //         <div>Species: ${city.city_1}</div>
        //         <button class="button--close">Close Dialog</button>


        // <div>City: TESTING THE BUTTON</div>

         // <button id="button--${city.city_1}">Details</button>
            // <dialog class="dialog--city" id="details--${city.city_1}"> 
            // <div>City: TESTING THE BUTTON</div>
            // <div>City: ${city.city_1}</div>
            // <button class="button--close">Close Dialog</button>  </li>