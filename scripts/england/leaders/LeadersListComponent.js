import { UseLeaders } from "./LeadersDataProvider.js";
import LeadersComponent from "./LeadersComponent.js";

const LeadersListComponent = () => {
  const leadersHTML = document.querySelector(".content");
  const useLeaders = UseLeaders();

  leadersHTML.innerHTML += `
    ${useLeaders.map(leader => LeadersComponent(leader)).join("")}  
  `;
};

export default LeadersListComponent;
