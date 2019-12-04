const LandMarkComponent = landmark => {
  return `
  <section class="content__landmarks highlight">
  <h3>${landmark.title}</h3>
  <button id="open--${landmark.title}">Details</button>

  <dialog class="content__landmarks dialog">
  <ul>
  <span class="thumbnail"> 
    <li>${landmark.landmark_1}</li>
    <span>
      <img class="info-pic-size" src="${landmark.image_1}" alt="${landmark.landmark_1}" />
      <br />
      <h4>${landmark.landmark_1}</h4>
      <p>${landmark.landmark_info_1}</p>
    </span>
  </span>
  <span class="thumbnail"> 
    <li>${landmark.landmark_2}</li>
    <span>
      <img class="info-pic-size" src="${landmark.image_2}" alt="${landmark.landmark_2}" />
      <br />
      <h4>${landmark.landmark_2}</h4>
      <p>${landmark.landmark_info_2}</p>
    </span>
  </span>
  <span class="thumbnail"> 
    <li>${landmark.landmark_3}</li>
    <span>
      <img class="info-pic-size" src="${landmark.image_3}" alt="${landmark.landmark_3}" />
      <br />
      <h4>${landmark.landmark_3}</h4>
      <p>${landmark.landmark_info_3}</p>
    </span>
  </span>
</ul>
    <button id="close--${landmark.title}">Close</button>
  </dialog>
</section>
  `;
};

export default LandMarkComponent;
