import React from "react";
import jpm from "../../assets/img/jpm.jpg";
import msta from "../../assets/img/msta.png";
import "./WorkExperience.css";

function WorkExperience() {
  return (
    <div className="workexperience">
      <div className="title-wrapper">
        <h2>EXPERIENCE</h2>
      </div>
      <div className="blocks">
        <div className="logo">
          <img className="logoimg" src={jpm} />
        </div>
        <div className="info">
          <h3>JPMorgan Chase</h3>
          <h4>Summer Analyst, Software Engineer</h4>
          <h5>May 2019 - Aug 2019</h5>
          <p className="write-up">
            JPMorgan Chase taught me to surround myself with people who
            constantly challenged me. There was never a dull moment sitting
            around wondering whether there was any work to be done. I spent the
            summer surrounded with brilliant Engineers who were extremely well
            versed in their domain. The talks and networking sessions organized
            has also taught me a lot about the complexities and challenges of a
            financial instituition. I am tremendously grateful for this
            opportunity as it has helped me build my confidence in both my
            technical and non-technical competencies.
          </p>
        </div>
      </div>
      <div className="blocks">
        <div className="logo">
          <img className="logoimg" src={msta} />
        </div>
        <div className="info">
          <h3>Singtel</h3>
          <h4>Software Engineer Intern</h4>
          <h5>May 2018 - Oct 2018</h5>
          <p className="write-up">
            I had the awesome opportunity to be selected as one of the few SHINE
            interns at Singtel. During my time, I was given the chance to learn
            from various Engineers while working on the 3rd Generation of the
            Singtel app. In these months, I helped with maintaining the existing
            application as well as writing scripts to better facillitate and
            automate progress tracking for the team. Getting the exposure and
            opportunity to speak to senior management in this programme has also
            allowed me to better understand the inner workings and the vastness
            of Singtel's business
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
