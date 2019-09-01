import React, { useState } from "react";
import profile1 from "../../assets/img/profile1.jpg";
import cv from "./cv.pdf";
import "./Introduction.css";

function Introduction() {
  const downloadcv = () => {
    console.log("happyday");
  };

  return (
    <div className="introduction">
      <div className="pic-wrapper">
        <img className="profileimg" src={profile1} />
        <div className="bio-wrapper">
          <p className="bio-info">
            <b>Name</b>: Darryl Leong
          </p>
          <p className="bio-info">
            <b>Loves</b>: Running, Music, Cheese,{" "}
            <a href="https://www.instagram.com/hunt_solo_/">@hunt_solo</a>
          </p>
          <p className="bio-info">
            <b>Major</b>: Information Systems
          </p>
          <p className="bio-info">
            <b>School</b>: National University of Singapore
          </p>
        </div>
      </div>
      <div className="shortdesc">
        <div className="section-header">
          <h2 className="section-header-text">
            <span>HEY EVERYONE</span>
          </h2>
        </div>
        <div className="section-body">
          <p>
            Nice to meet ya, my name is{" "}
            <span className="bolded-words">Darryl Leong</span>. I'm currently
            finishing up my last year in college at the{" "}
            <span className="bolded-words">
              National University of Singapore
            </span>
            . I really enjoy building and working on my own projects, whether it
            is to serve a functional purpose or explore, I'm always keen to
            learn something new.
          </p>

          <p>
            When it comes to tech, I find myself invested in ideas which are
            able to directly impact the lives of others. Though I don't
            particularly have a preference towards any stack/technology, I'm
            very much a believer in taking the "shortest path" possible while
            balancing my goals of learning new technologies.
          </p>

          <p>
            You might've randomly stumbled on this website but now that you're
            here I hope you take your time and enjoy it!
          </p>
        </div>
        <div className="cv-wrapper">
          <div className="cv-button-wrapper">
            <a href={cv} download="DARRYL_LEONG_CV" className="cv">
              DOWNLOAD MY CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
