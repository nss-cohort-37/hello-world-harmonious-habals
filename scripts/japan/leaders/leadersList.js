import {useLeaders} from "./leadersDataProvider.js"
import LeaderComponent from "./leaders.js"

const LeaderListComponent = () => {

  const leadersHTML = document.querySelector(".content")
  const leaders = useLeaders()

  leadersHTML.innerHTML += `
    ${leaders.map(leader => LeaderComponent(leader)).join("")}
  `
}


export default LeaderListComponent