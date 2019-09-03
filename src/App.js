import React from "react";
import Introduction from "./components/introduction/Introduction";
import Education from "./components/education/Education";
import WorkExperience from "./components/workexperience/WorkExperience";
import Skills from "./components/skills/Skills";
import Involvements from "./components/involvements/Involvements";
import Achievements from "./components/achievements/Achievements";
import Badges from "./components/badges/Badges";

import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

import "./App.css";

function App() {
  return (
    <div className="body">
      <div className="header">
        <div className="header-wrapper">
          <h4 className="header-text-first">Hey, I'm</h4>
          <h4 className="header-text-second">DARRYL LEONG</h4>
          <div className="sm-wrapper">
            <a className="sm-link" href="https://github.com/darryleong95" target="_blank"><FaGithub size="3em" className="sm-icon"/></a>
            <a className="sm-link" href="https://www.instagram.com/darryleong/" target="_blank"><FaInstagram size="3em" className="sm-icon"/></a>
            <a className="sm-link" href="https://www.facebook.com/darryl.v.leong" target="_blank"><FaFacebook size="3em" className="sm-icon"/></a>
          </div>
        </div>
      </div>
      <div className="aboutme">
        <Introduction />
        <div className="background">
          <Education />
          <WorkExperience />
          <Skills />
          <Involvements />
          <Achievements />
          <Badges />
        </div>
      </div>
      {/* <div className="loves"></div>
      <div className="blog"></div> */}
    </div>
  );
}

export default App;
