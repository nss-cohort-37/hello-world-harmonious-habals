import {useLandmarks} from "./landmarksDataProvider.js"
import LandmarkComponent from "./landmarks.js"

const LandmarkListComponent = () => {

  const landmarksHTML = document.querySelector(".content__landmarks")
  const landmarks = useLandmarks()

  landmarksHTML.innerHTML += `
    ${landmarks.map(landmark => LandmarkComponent(landmark)).join("")}
  `
}


export default LandmarkListComponent