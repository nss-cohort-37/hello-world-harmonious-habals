import { UseLandmarks } from "./LandmarksDataProvider.js";
import LandMarkComponent from "./LandmarksComponent.js";

const LandmarkListComponent = () => {
  const landmarkHTML = document.querySelector(".content");
  const useLandmarks = UseLandmarks();

  landmarkHTML.innerHTML += `
    ${useLandmarks.map(landmark => LandMarkComponent(landmark)).join("")}
  `;
};

export default LandmarkListComponent;