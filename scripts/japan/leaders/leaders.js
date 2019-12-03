const LeaderComponent = (leaders) => {
  return `
      <div class="leaders">
          <h3>${leaders.title}</h3>
            <ul>
              <li>${leaders.leader_1}</li>
              <li>${leaders.leader_2}</li>
            </ul>
      </div>
  `
}

export default LeaderComponent