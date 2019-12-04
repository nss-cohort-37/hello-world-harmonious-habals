const CitiesComponent = cities => {
  return `
  <section class="content__cities highlight">
  <h3>Cities</h3>
  <button id="open--${cities.title}">Details</button>
  
  <dialog class="content__cities dialog">
    <ul>
      <span class="thumbnail"> 
        <li>${cities.city_1}</li>
        <span>
          <img src="${cities.image_1}" alt="London, England" />
          <br />
          <h4>London, England</h4>
          <p>Capital and largest city of the UK.
          </p>
        </span>
      </span>
      <span class="thumbnail"> 
        <li>${cities.city_2}</li>
        <span>
          <img src=${cities.image_2} alt="Oxford, England" />
          <br />
          <h4>Oxford, England</h4>
          <p>Home to the oldest university of the English-speaking world.</p>
        </span>
      </span>
      <span class="thumbnail"> 
        <li>${cities.city_3}</li>
        <span>
          <img src="${cities.image_3}" alt="Liverpool, England" />
          <br />
          <h4>Liverpool, England</h4>
          <p>Home to The Beatles.</p>
        </span>
      </span>
    </ul>
    <button id="close--${cities.title}" class="btn">Close</button>
  </dialog>
</section>
  `;
};

export default CitiesComponent;