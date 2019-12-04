const LandmarkComponent = (landmarks) => {
  return `
  <section class="content__landmarks highlight">
    <h3>${landmarks.title}</h3>
    <button id="open--${landmarks.title}">Details</button>

    <dialog class="content__landmarks dialog japan_dialog">
      <ul>
        <span class="thumbnail"> 
          <li>${landmarks.landmark_1}</li>
          <span>
            <img class="info-pic-size" src="${landmarks.image_1}" alt="${landmarks.alt_text_1}" />
            <br>
            <h4>${landmarks.landmark_1}</h4>
            <p>${landmarks.text_1}</p>
          </span>
        </span>

        <br>

        <span class="thumbnail"> 
          <li>${landmarks.landmark_2}</li>
          <span>
            <img class="info-pic-size" src="${landmarks.image_2}" alt="${landmarks.alt_text_2}" />
            <br>
            <h4>${landmarks.landmark_2}</h4>
            <p>${landmarks.text_2}</p>
          </span>
        </span>

        <br>

        <span class="thumbnail"> 
          <li>${landmarks.landmark_3}</li>
          <span>
            <img class="info-pic-size" src="${landmarks.image_3}" alt="${landmarks.alt_text_3}" />
            <br>
            <h4>${landmarks.landmark_3}</h4>
            <p>${landmarks.text_3}</p>
          </span>
        </span>
      </ul>

      <button id="close--${landmarks.title}">Close</button>
      </dialog>
    </section>
  `
}

export default LandmarkComponent