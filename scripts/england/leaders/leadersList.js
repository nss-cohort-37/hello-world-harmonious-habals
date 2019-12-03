import { useLeaders } from "./leaderDataProvider.js";
import LeaderComponent from "./leaders.js";

const leadersListComponent = () => {
  const leaderData = useLeaders()
  const contentElement = document.querySelector(".content");

  contentElement.innerHTML += `
    <section class="content__leaders highlight">
    <h3>Leaders</h3>
    <ul>
      ${leaderData
        .map(currentLeader => {
          return LeaderComponent(currentLeader);
        })
        .join("")}
    </ul>
    </section>`;
};

export default leadersListComponent;