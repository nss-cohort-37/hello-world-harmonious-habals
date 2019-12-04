const LeaderComponent = (leaders) => {
  return `
  <section class="content__leaders highlight">
    <h3>Heads of State</h3>
    <button id="open--${leaders.title}">Details</button>

    <dialog class="content__leaders dialog">
      <ul>
        <span class="thumbnail">
          <li>${leaders.leader_1}</li>
          <span>
            <image src="${leaders.image_1}" alt="${leaders.alt_text_1}" />
            <br>
            <h4>${leaders.leader_1}</h4>
            <p>${leaders.text_1}</p>
          </span>
        </span>

        <span class="thumbnail">
          <li>${leaders.leader_2}</li>
          <span>
            <image src="${leaders.image_2}" alt="${leaders.alt_text_2}" />
            <br>
            <h4>${leaders.leader_2}</h4>
            <p>${leaders.text_2}</p>
          </span>
        </span>
      </ul>

      <button id="close--${leaders.title}" class="btn">Close</button>
      </dialog>
  </section>
  `
}

export default LeaderComponent