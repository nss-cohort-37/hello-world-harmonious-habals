/**
 *   LeaderListComponent which renders individual Leaders objects as HTML
 */

import { useLeader } from "./leaderDataProvider.js"

import LeaderComponent from "./leader.js"



const LeaderListComponent = () => {
    const leaders = useLeader()
    const contentElement = document.querySelector(".content__leaders")
    contentElement.innerHTML += `
        <section class="leaderList">
            ${
                leaders.map(leader => LeaderComponent(leader)).join("")
            }
        </section>
        
    `
    
}

export default LeaderListComponent