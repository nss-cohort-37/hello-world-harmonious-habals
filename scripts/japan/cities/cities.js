const CityComponent = (cities) => {
  return `
      <div class="cities">
          <h3>${cities.title}</h3>
            <ul>
              <li>${cities.city_1}</li>
              <li>${cities.city_2}</li>
              <li>${cities.city_3}</li>
              <li>${cities.city_4}</li>
            </ul>
      </div>
  `
}

export default CityComponent