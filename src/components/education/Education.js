import React, { useState } from "react";
import nuscom from "../../assets/img/nuscom.jpg";
import sajc from "../../assets/img/sajc.jpg";
import sji from "../../assets/img/sji.jpg";
import "./Education.css";

function Education() {
  return (
    <div className="education">
      <div className="title-wrapper">
        <h2>EDUCATION</h2>
      </div>
      <div className="blocks">
        <div className="logo">
          <img className="logoimg" src={nuscom} />
        </div>
        <div className="info">
          <h3>National University of Singapore</h3>
          <h4>Bachelors of Computing, Information Systems</h4>
          <h5>Earning in May 2020</h5>
        </div>
      </div>
      <div className="blocks">
        <div className="logo">
          <img className="logoimg" src={sajc} />
        </div>
        <div className="info">
          <h3>Saint Andrew's Junior College</h3>
          <h4>GCE 'A' Levels</h4>
          <h5>Jan 2012 - Dec 2013</h5>
          <p className="write-up">Achieved Distinctions in Mathematics, Physics, Project Work</p>
        </div>
      </div>
      <div className="blocks">
        <div className="logo">
          <img className="logoimg" src={sji} />
        </div>
        <div className="info">
          <h3>Saint Joseph's Instituition</h3>
          <h4>GCE 'O' Levels</h4>
          <h5>Jan 2008 - Dec 2011</h5>
          <p className="write-up">
            Distinctions in English, Additonal Mathematics, Mathematics,
            Chemistry, History, Combined Humanities
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
