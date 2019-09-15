import React from "react";

import Banner from "./components/banner/Banner";
import AboutMe from "./components/aboutme/AboutMe";
import ImageSection from "./components/imagesection/ImageSection";
import Badges from "./components/badges/Badges";
import Footer from "./components/footer/Footer";

import Skills from "./components/skills/Skill";

import SingleColumnSection from "./components/singlecolumnsection/SingleColumnSection";
import DualColumnSection from "./components/dualcolumnsection/DualColumnSection";

import {
  education,
  workexperience,
  involvements,
  achievements,
  skillsimg
} from "./constants";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Banner />
      </div>
      <div className="body">
        <AboutMe />
        <SingleColumnSection title="EDUCATION" bg="rgb(245, 245, 245)" sep_bg="rgb(245, 245, 245)" sep="rgb(190, 190, 190)" info={education} />
        <SingleColumnSection title="CREDENTIALS" info={workexperience} />
        <ImageSection title="TOOLKIT" img={skillsimg} bg="rgb(245, 245, 245)" sep_bg="rgb(245, 245, 245)" sep="rgb(190, 190, 190)" />
        <Skills />
        <SingleColumnSection title="INVOLVEMENTS" info={involvements} />
        <DualColumnSection title="HACKS & SUCH" bg="rgb(245, 245, 245)" sep_bg="rgb(245, 245, 245)" sep="rgb(190, 190, 190)" info={achievements} blockbg="white" />
        <Badges />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
