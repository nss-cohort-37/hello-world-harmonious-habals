const LeadersComponent = leaders => {
  return `
        <section class="content__leaders highlight">
        <h3>${leaders.title}</h3>
        <button id="open--${leaders.title}">Details</button>
        
        <dialog class="content__leaders dialog">
        <ul>
        <span class="thumbnail"> 
          <li>${leaders.headOfState_1}</li>
          <span>
            <img src="${leaders.image_1}" alt="${leaders.headOfState_1}" />
            <br />
            <h4>${leaders.headOfState_1}</h4>
            <p>Vote Labour!</p>
          </span>
        </span>
        <span class="thumbnail"> 
          <li>${leaders.headOfState_2}</li>
          <span>
            <img src="${leaders.image_2}" alt="${leaders.headOfState_2}" />
            <br />
            <h4>${leaders.headOfState_2}</h4>
            <p>One of the weirdest politicians of the 21st century. Possibly a time traveler from the 16th century.</p>
          </span>
        </span>
        <span class="thumbnail"> 
          <li>${leaders.headOfState_3}</li>
           <span>
            <img src="${leaders.image_3}" alt="${leaders.headOfState_3}" />
            <br />
            <h4>${leaders.headOfState_3}</h4>
            <p>#Khaleesi</p>
          </span>
        </span>
      </ul>             
          <button id="close--${leaders.title}">Close</button>
        </dialog>
      </section>
        `;
      };

export default LeadersComponent;