const LandMarkComponent = landmark => {
  return `
  <section class="content__landmarks highlight">
  <h3>${landmark.title}</h3>
  <button id="open--${landmark.title}">Details</button>

  <dialog class="content__landmarks dialog">
    <ul>
      <li>${landmark.landmark_1}</li>
      <li>${landmark.landmark_2}</li>
      <li>${landmark.landmark_3}</li>
    </ul>
    <button id="close--${landmark.title}">Close</button>
  </dialog>
</section>
  `;
};

export default LandMarkComponent;
