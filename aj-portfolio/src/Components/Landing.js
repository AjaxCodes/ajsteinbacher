import React from "react";
import { Grid, Cell } from "react-mdl";
import ajface from "../Images/ajface.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Landing() {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing_grid">
        <Cell col={12}>
          <img src={ajface} alt="aj face" className="ajFace" />
          <div className="banner_text">
            <h1>Frontend Web Developer</h1>
            <hr />
            <p>
              HTML/CSS | Javascript | React.js | Express.js | Firebase | MongoDB
              | Node.js| MySQL | Material UI |
            </p>
            <div className="social_links">
              <a
                href="https://github.com/AjaxCodes"
                rel="noopener noreferrer"
                target="blank"
              >
                <i>
                  <GitHubIcon />
                </i>
              </a>
              <a
                href="https://www.linkedin.com/in/a-j-steinbacher-703779a6/"
                rel="noopener noreferrer"
                target="blank"
              >
                <i>
                  <LinkedInIcon />
                </i>
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Landing;
