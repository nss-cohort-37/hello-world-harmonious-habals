const CityComponent = (cities) => {
  return `
  <section class="content__cities highlight">
    <h3>${cities.title}</h3>
    <button id="open--${cities.title}">Details</button>
    
    <dialog class="content__cities dialog japan_dialog">
      <ul>
        <span class="thumbnail">
          <li>${cities.city_1}</li>
          <span>
            <image class="info-pic-size" src="${cities.image_1}" alt="${cities.alt_text_1}" />
            <br>
            <h4>${cities.city_1}</h4>
            <p>${cities.text_1}</p>
          </span>
        </span>

        <br>

        <span class="thumbnail">
          <li>${cities.city_2}</li>
          <span>
            <image class="info-pic-size" src="${cities.image_2}" alt="${cities.alt_text_2}" />
            <br>
            <h4>${cities.city_2}</h4>
            <p>${cities.text_2}</p>
          </span>
        </span>

        <br>

        <span class="thumbnail">
          <li>${cities.city_3}</li>
          <span>
            <image class="info-pic-size" src="${cities.image_3}" alt="${cities.alt_text_3}" />
            <br>
            <h4>${cities.city_3}</h4>
            <p>${cities.text_3}</p>
          </span>
        </span>

        <br>

        <span class="thumbnail">
          <li>${cities.city_4}</li>
          <span>
            <image class="info-pic-size" src="${cities.image_4}" alt="${cities.alt_text_4}" />
            <br>
            <h4>${cities.city_4}</h4>
            <p>${cities.text_4}</p>
          </span>
        </span>
      </ul>

      <button id="close--${cities.title}" class="btn">Close</button>
      </dialog>
  </section>
  `
}

export default CityComponent