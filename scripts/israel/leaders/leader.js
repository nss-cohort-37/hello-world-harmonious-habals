
/**
 *  LeaderComponent which renders individual Leader objects as HTML
 */


const LeaderComponent = (leader) => {
    return `
    
    <h3>Heads of State</h3>
        <ul>
            <li>${leader.leader_1}</li>
            <li>${leader.leader_2}</li>
            <li>${leader.leader_3}</li>
            
        </ul>
    
    `
    }
    
    
    
    // <!-- cities -->
    // <section class="highlight content__cities">
    //     <h3>Cities</h3>
    //     <ul>
    //         <li>Jerusalem</li>
    //         <li>Tel Aviv-Yafo</li>
    //         <li>Netanya</li>
    //         <li>TiberiasCity</li>
    //     </ul>
    // </section>
    
    
    export default LeaderComponent