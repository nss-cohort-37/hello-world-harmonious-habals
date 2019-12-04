
/**
 *  LandMarkComponent which renders individual Landmarks objects as HTML
 */


const LandMarkComponent = (city) => {
    return `
    
    <h3>Landmarks</h3>
        <ul>
            <li>${city.landMark_1}</li>
            <li>${city.landMark_2}</li>
            <li>${city.landMark_3}</li>
            <li>${city.landMark_4}</li>
        </ul>
    
    `
    }
    
      

    // <!-- <h3>Landmarks</h3> -->
    // <!-- <ul>
    //     <li>Western Wall</li>
    //     <li>Beit Hatfutsot - Museum</li>
    //     <li>Sea of Galilee</li>
    //     <li>Tomb of Maimonides</li>
    // </ul> -->



       
    
    export default LandMarkComponent