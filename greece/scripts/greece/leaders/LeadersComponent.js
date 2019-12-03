const LeadersComponent = leaders => {
  return `
  <section class="content__leaders highlight">
   <h3>${leaders.title}</h3>
   <button id="open--${leaders.title}">Details</button>
     <dialog class="content__leaders">
       <ul>
         <li>${leaders.headOfState}</li>
       </ul>
       <button id="close--${leaders.title}">Close</button>
     </dialog>
  </section>

  `;
  // `
  // <section class="content__leaders highlight">
  //   <h3>${leaders.title}</h3>
  //   <button id="open--${leaders.title}">Details</button>
  //   <dialog class="content__leaders">
  //     <ul>
  //       <li>${leaders.headOfState}</li>
  //     </ul>
  //     <button id="close--${leaders.title}">Close</button>
  //   </dialog>
  // </section>
  // `;
};

export default LeadersComponent;
