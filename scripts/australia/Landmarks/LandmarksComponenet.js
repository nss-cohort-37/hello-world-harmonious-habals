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
        <p> It is home to many protected species of flora and fauna.</p>
      </span>
    </span>
    <span class="thumbnail"> 
      <li>${landmark.landmark_2}</li>
      <span>
        <img src="${landmark.image_2}" alt="${landmark.landmark_2}" />
        <br />
        <h4>${landmark.landmark_2}</h4>
        <p>Kryal Castle Adventure Park & Resort in Ballarat.</p>
      </span>
    </span>
    <span class="thumbnail"> 
      <li>${landmark.landmark_3}</li>
      <span>
        <img src="${landmark.image_3}" alt="${landmark.landmark_3}" />
        <br />
        <h4>${landmark.landmark_3}</h4>
        <p>Island is famous for many products. Locally caught fish, Southern rock lobster.</p>
      </span>
    </span>
    <span class="thumbnail"> 
      <li>${landmark.landmark_4}</li>
      <span>
        <img src="${landmark.image_4}" alt="${landmark.landmark_4}" />
        <br />
        <h4>${landmark.landmark_4}</h4>
        <p>Known as one of the most beautiful beaches in all of the world. .</p>
      </span>
    </span>
  </ul>
      <button id="close--${landmark.title}">Close</button>
    </dialog>
  </section>
    `;
  };
  
  export default LandMarkComponent;
  