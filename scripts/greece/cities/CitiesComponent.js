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
          <img class="info-pic-size" src="${cities.image_1}" alt="Athens Greece" />
          <br />
          <h4>${cities.city_1}</h4>
          <p>Athens was the largest and most powerful Greek state. It was a city with lots of beautiful public buildings, shops and public baths. The people of Athens lived below the  Acropolis (rocky hill).
          </p>
        </span>
      </span>
      <span class="thumbnail"> 
        <li>${cities.city_2}</li>
        <span>
          <img class="info-pic-size" src=${cities.image_2} alt="Thessaloniki Greece" />
          <br />
          <h4>${cities.city_2}</h4>
          <p>Thessaloniki is the second largest city of Greece and the most important centre of the area. Built near the sea, it is a modern metropolis bearing the marks of its stormy history and its cosmopolitan character, which give it a special beauty and charm.</p>
        </span>
      </span>
      <span class="thumbnail"> 
        <li>${cities.city_3}</li>
        <span>
          <img class="info-pic-size" src="${cities.image_3}" alt="Santorini Greece" />
          <br />
          <h4>${cities.city_3}</h4>
          <p>Located in the heart of the vast Aegean sea, Santorini boasts a unique landscape! The famous Santorini caldera, amazing red and black volcanic beaches, and, of course, volcano's crater in Nea Kameni, all remind the origins of the island, which was shaped by volcanic eruptions.</p>
        </span>
      </span>
    </ul>
    <button id="close--${cities.title}" class="btn">Close</button>
  </dialog>
</section>
  `;
};

export default CitiesComponent;
