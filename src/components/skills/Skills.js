import React from "react";
import skills from "../../assets/img/skills.png";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-container">
        <div className="title-wrapper">
          <h2 className="toolkit-text">TOOLKIT</h2>
        </div>
        {/* <p className="skills-header">
        As a student with a very modest amount professional experience, I find
        it quite tough to organize my technical competencies into proficient or
        fair. Instead I think a better way to convey some of my competencies is
        to share what I am currently comfortable with or different areas which I
        have meddled in before.
      </p> */}
        <div className="skills-wrapper">
          <div>
            <img className="skills-img" src={skills} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
