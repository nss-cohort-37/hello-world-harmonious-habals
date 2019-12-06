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
        </ul>             
            <button id="close--${leaders.title}">Close</button>
          </dialog>
        </section>
          `;
        };
  
  export default LeadersComponent;