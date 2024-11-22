import React, { useContext } from "react";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";

import { FaLinkedin } from "react-icons/fa";

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);

  return (
    <div className="landing">
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
          </div>
        </div>
        <img
          src="/BPL03083.png" // Note the leading slash
          alt=""
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.secondary,
          }}
        />

        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            <h6>{headerData.title}</h6>
            <h1>{headerData.name}</h1>
            <p>{headerData.desciption}</p>

            {/* <div className="lcr-buttonContainer">
                {headerData.resumePdf && (
                  <a
                    href={headerData.resumePdf}
                    download="resume"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className={classes.resumeBtn}>Download CV</Button>
                  </a>
                )}
                <NavLink
                  to="/#contacts"
                  smooth={true}
                  spy="true"
                  duration={2000}
                >
                  <Button className={classes.contactBtn}>Contact</Button>
                </NavLink>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
