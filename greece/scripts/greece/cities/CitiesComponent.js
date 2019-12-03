const CitiesComponent = cities => {
  return `
  <section class="content__cities highlight">
  <h3>Cities</h3>
  <button id="open--${cities.title}">Details</button>
  
  <dialog class="content__cities dialog">
  <ul>
    <li>${cities.city_1}</li>
    <li>${cities.city_2}</li>
    <li>${cities.city_3}</li>
  </ul>
  <button id="close--${cities.title}">Close</button>
  </dialog>
</section>
  `;
};

export default CitiesComponent;
