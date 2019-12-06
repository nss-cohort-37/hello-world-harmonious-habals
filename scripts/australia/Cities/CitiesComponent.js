const CitiesComponent = (cities) => {
    return `
    <section class="content__cities highlight">
    <h3>Cities</h3>
    <button id="open--${cities.title}">Details</button>
    
    <dialog class="content__cities dialog">
      <ul>
        <span class="thumbnail"> 
          <li>${cities.city_1}</li>
          <span>
            <img src="${cities.image_1}" alt="Cairna, Australia" />
            <br />
            <h4>Cairna, Australia</h4>
            <p> Cairns is famous for its spectacular sun, sand, and sea. 
            </p>
          </span>
        </span>
        <span class="thumbnail"> 
          <li>${cities.city_2}</li>
          <span>
            <img src=${cities.image_2} alt="Gold Coast, Australia" />
            <br />
            <h4>Gold Coast, Australia</h4>
            <p>Gold Coast’s famous for its tropical rainforest</p>
          </span>
        </span>
        <span class="thumbnail"> 
          <li>${cities.city_3}</li>
          <span>
            <img src="${cities.image_3}" alt="Darwin, Australia" />
            <br />
            <h4>Darwin, England</h4>
            <p>Darwin City Famous for tropical lifestyle</p>
          </span>
        </span>
        <span class="thumbnail"> 
          <li>${cities.city_4}</li>
          <span>
            <img src="${cities.image_4}" alt="Hobart, Australia" />
            <br />
            <h4>Hobart, Astraliya</h4>
            <p>Australia's second oldest capital city after Sydney, New South Wales.</p>
          </span>
        </span>
        <span class="thumbnail"> 
          <li>${cities.city_5}</li>
          <span>
            <img src="${cities.image_5}" alt="Sydney, Australia" />
            <br />
            <h4>Sydney,Austalia</h4>
            <p>sydney is world famous for its shimmering harbor and clear blue skies.</p>
          </span>
        </span>
      </ul>
      <button id="close--${cities.title}" class="btn">Close</button>
    </dialog>
  </section>
    `;
  };
  
  export default CitiesComponent;