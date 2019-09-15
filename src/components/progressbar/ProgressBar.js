import React from "react";
import "./ProgressBar.scss";

const ProgressBar = props => {
  return (
    <div className="progress-bar-container">
      <p className="skill-name">{props.skill}</p>
      <div className="progress-bar-wrapper">
        <div
          className="progress-bar"
          style={props.toggle ? { width: props.progress } : null}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
