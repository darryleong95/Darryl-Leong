import React from "react";
import sif from "../../assets/img/sif.png";
import bosch from "../../assets/img/bosch.jpg";
import orbital from "../../assets/img/orbital.jpg";
import "./Achievements.css";

function Achievements() {
  return (
    <div className="achievements">
      <div className="title-wrapper">
        <h2>HACKATHONS & SUCH</h2>
      </div>
      <div className="wrapper">
        <div className="indiv">
          <div className="indiv1">
            <div className="indiv-wrapper">
              <div className="logo-wrapper">
                <img className="achievements-logoimg" src={sif} />
              </div>
              <div className="ach-info-wrapper">
                <p className="ach-title">Social Inno Fest 2018</p>
                <p className="ach-info">
                  Most Voted Award / Top-5 Award at Social Inno Fest 2018
                </p>
                <p className="ach-write-up">
                  Worked on a problem statement aimed at reducing social
                  isolation of the elderly in Singapore. Really grateful for the
                  opportunity to work with a diverse team of individuals from
                  different backgrounds.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="indiv">
          <div className="indiv1">
            <div className="indiv-wrapper">
              <div className="logo-wrapper">
                <img className="achievements-logoimg" src={bosch} />
              </div>
              <div className="ach-info-wrapper">
                <p className="ach-title">Bosch IOT Hackathon 2018</p>
                <p className="ach-info">Top 10</p>
                <p className="ach-write-up">
                  My very first experience dealing with sensors! This opened my
                  eyes to the huge range of applications of IOT in our evolving
                  society. Had a really fun time working on a solution to
                  automate workout tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="indiv">
          <div className="indiv1">
            <div className="indiv-wrapper">
              <div className="logo-wrapper">
                <img className="achievements-logoimg" src={orbital} />
              </div>
              <div className="ach-info-wrapper">
                <p className="ach-title">Orbital - NUS Summer Programme 2017</p>
                <p className="ach-info">
                  Achieved Apollo Level (Highest level)
                </p>
                <p className="ach-write-up">
                  Very first attempt at software development. My team member and
                  I worked on a platform which matched student developers to
                  individuals/groups which required adhoc software development
                  help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
