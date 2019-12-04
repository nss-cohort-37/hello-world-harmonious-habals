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
            <p>Established in 1753, its permanent collection of over 8,000,000 works is among the largest in existence.</p>
          </span>
        </span>
        <span class="thumbnail"> 
          <li>${landmark.landmark_2}</li>
          <span>
            <img src="${landmark.image_2}" alt="${landmark.landmark_2}" />
            <br />
            <h4>${landmark.landmark_2}</h4>
            <p>The largest club soccer stadium in the UK, home to Manchester United.</p>
          </span>
        </span>
        <span class="thumbnail"> 
          <li>${landmark.landmark_3}</li>
          <span>
            <img src="${landmark.image_3}" alt="${landmark.landmark_3}" />
            <br />
            <h4>${landmark.landmark_3}</h4>
            <p>The formerly fictional address of detective Sherlock Holmes is now a real address with its own museum.</p>
          </span>
        </span>
      </ul>
          <button id="close--${landmark.title}">Close</button>
        </dialog>
      </section>
        `;
      };
      
      export default LandMarkComponent;
      