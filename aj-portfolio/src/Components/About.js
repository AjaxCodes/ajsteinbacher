import React from "react";
import { Grid, Cell } from "react-mdl";

function About() {
  return (
    <div className="contact_body">
      <Grid className="contact_grid">
        <Cell col={12}>
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Profile: <br /> Keen Troubleshooter with impressive problem solving
            skills. Expert in team building, leadership, as well as quality
            control, product knowledge, eight great work habits, event planning.
            Able to complete work successfully in stressful environments.
          </p>
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Education: <br /> Bachelors of Arts Graphic Design | Art Institute of
            Wisconsin : November, 2012 - September, 2014 Certification Web
            Development | devCodeCamp : September, 2020 - December, 2020
          </p>
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Military Service: <br/> 19D Cavalry Scout Jan 2004 - Mar 2012
            I am a Vetrean of Iraq and Afghanistan. I servever three tours
            of duty doing reconnasaince for the Army.<br/>
            Commendations:<br/> Honorable Discharge | Two, Purple Hearts | NATO
            Ribbon | Two, Good Conduct Medals | Two, Iraqi Campaign Medals |
            Afghanistan Campaign Medal | Three, Overseas ribbons |
            Noncommissioned Officer Ribbon | Valorous Unit Award | Professional
            Development Ribbon | Global War on Terrorism Medal | Four Army
            Achievement Ribbons | Four, Army Accommodation Medals | Combat Action
            Badge | President’s Meritorious Unit Citation | Driver & Mechanic
            Badge W/ Clasp
          </p>
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Technologies used :<br/> 
            HTML/CSS | Javascript |React.JS | MongoDB | Material UI | Firebase |
            Express.JS | Node.JS | Jquery | Axios | Ajax | MySQL
          </p>
        </Cell>
      </Grid>
    </div>
  );
}

export default About;
