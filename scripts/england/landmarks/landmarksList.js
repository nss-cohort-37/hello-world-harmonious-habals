import { useLandmarks } from "./landmarksDataProvider.js";
import LandmarkComponent from "./landmarks.js";

const landmarksListComponent = () => {
  const landmarkData = useLandmarks()
  const contentElement = document.querySelector(".content");

  contentElement.innerHTML += `
    <section class="content__landmarks highlight">
    <h3>Landmarks</h3>
    <ul>
      ${landmarkData
        .map(currentLandmark => {
          return LandmarkComponent(currentLandmark);
        })
        .join("")}
    </ul>
    </section>`;
};

export default landmarksListComponent;