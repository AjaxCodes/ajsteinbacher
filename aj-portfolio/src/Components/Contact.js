import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import ajpic from "../Images/ajpic.png";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

function Contact() {
  return (
    <div className="contact_body">
      <Grid className="contact_grid">
        <Cell col={6}>
          <h2>AJ Steinbacher</h2>
          <img
            src={ajpic}
            alt="Aj Steinbacher Photograph"
            style={{ height: "250px" }}
          />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            HTML/CSS | Javascript |React.JS | MongoDB | Material UI | Node.JS |
            Express.JS | Firebase | Jquery | Axios | Ajax | MySQL
          </p>
        </Cell>

        <Cell col={6}>
          <h2> Contact Me</h2>
          <hr />
          <div className="contact_content">
            <List>
              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "25px",
                    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  <PhoneIphoneIcon />
                  414.294.8504
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "25px",
                    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  <EmailIcon />
                  adamjsteinbacher@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "16px",
                    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  <LinkedInIcon />
                  linkedin.com/in/a-j-steinbacher-703779a6/
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Contact;
