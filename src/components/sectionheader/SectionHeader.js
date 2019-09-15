import React from "react";
import Seperator from "../seperator/Seperator";

import "./SectionHeader.scss";

const SectionHeader = props => {
  return (
    <div className="section-header">
      <h2
        style={{ color: props.textcolor }}
        className={
          "section-header-text " + (props.toggle ? "header-animation" : null)
        }
      >
        {props.title}
      </h2>
      <Seperator
        bgcolor={props.bgcolor}
        color={props.seperatorcolor}
        toggle={props.toggle}
      />
    </div>
  );
};

export default SectionHeader;
