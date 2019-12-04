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
      <img src="${landmark.image_1}" alt="${landmark.landmark_1}" />
      <br />
      <h4>${landmark.landmark_1}</h4>
      <p>Plateau Gious Kambos is located on the western edge of Psiloritis, by the Amari valley, about 31km south of Rethymno. It is a small but very special plateau, which is full of flowers in the spring. The name means the Plain of Eos, which in Greek mythology was the goddess of the Dawn.</p>
    </span>
  </span>
  <span class="thumbnail"> 
    <li>${landmark.landmark_2}</li>
    <span>
      <img src="${landmark.image_2}" alt="${landmark.landmark_2}" />
      <br />
      <h4>${landmark.landmark_2}</h4>
      <p>Ha Gorge is a canyon on the eastern part of the island of Crete in Greece. It is located in the west slope of Thrypti mountain and near of Monastiraki village in the plain of Ierapetra. The gorge is about 1.5km long, particularly narrow at several points and has walls rising up to 300m.</p>
    </span>
  </span>
  <span class="thumbnail"> 
    <li>${landmark.landmark_3}</li>
    <span>
      <img src="${landmark.image_3}" alt="${landmark.landmark_3}" />
      <br />
      <h4>${landmark.landmark_3}</h4>
      <p>The Blue Grotto or Blue Cave, is a waterlogged sea cave located in a small bay called Balun, on the east side of the island of Biševo and about 4.5 nautical miles from Komiža, in the Croatian Adriatic.</p>
    </span>
  </span>
</ul>
    <button id="close--${landmark.title}">Close</button>
  </dialog>
</section>
  `;
};

export default LandMarkComponent;
