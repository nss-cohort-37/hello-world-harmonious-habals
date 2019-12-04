const CitiesComponent = cities => {
  return `
  <section class="content__cities highlight">
  <h3>Cities</h3>
  <button id="open--${cities.titles}">Details</button>
  
  <dialog class="content__cities dialog">
    <ul>
      <span class="thumbnail"> 
        <li>${cities.city_1}</li>
        <span>
          <img class="info-pic-size" src="${cities.image_1}" alt="${cities.city_1}" />
          <br />
          <h4>${cities.city_1}</h4>
          <p>${cities.city_1_info}</p>
        </span>
      </span>
      <span class="thumbnail"> 
        <li>${cities.city_2}</li>
        <span>
          <img class="info-pic-size" src=${cities.image_2} alt="${cities.city_2}" />
          <br />
          <h4>${cities.city_2}</h4>
          <p>${cities.city_2_info}</p>
        </span>
      </span>
      <span class="thumbnail"> 
        <li>${cities.city_3}</li>
        <span>
          <img class="info-pic-size" src="${cities.image_3}" alt="${cities.city_3}" />
          <br />
          <h4>${cities.city_3}</h4>
          <p>${cities.city_3_info}</p>
        </span>
      </span>
    </ul>
    <button id="close--${cities.title}" class="btn">Close</button>
  </dialog>
</section>
  `;
};

export default CitiesComponent;
