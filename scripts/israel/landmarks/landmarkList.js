/**
 *   LandMarkListComponent which renders individual Landmark objects as HTML
 */

import { useLandMark } from "./landmarkDataProvider.js"

import LandMarkComponent from "./landmark.js"



const LandmarkListComponent = () => {
    const landmarks = useLandMark()
    const contentElement = document.querySelector(".content__landmarks")
    contentElement.innerHTML += `
        <section class="landmarkList">
            ${
                landmarks.map(landmark => LandMarkComponent(landmark)).join("")
            }
        </section>
        
    `
    
}

export default LandmarkListComponent