const LandmarkComponent = (landmarks) => {
  return `
      <div class="landmarks">
          <h3>${landmarks.title}</h3>
            <ul>
              <li>${landmarks.landmark_1}</li>
              <li>${landmarks.landmark_2}</li>
              <li>${landmarks.landmark_3}</li>
            </ul>
      </div>
  `
}

export default LandmarkComponent