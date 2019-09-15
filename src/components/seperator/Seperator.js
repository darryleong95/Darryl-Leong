import React from "react";
import "./Seperator.scss"

const Seperator = props => {
  return (
    <div style={{backgroundColor: props.color}} className={"seperator " + (props.toggle ? "header-animation" : null)}>
      <div style={{backgroundColor: props.bgcolor}} className="seperator-diamond-wrapper">
        <div style={{backgroundColor: props.color}} className="seperator-diamond" />
        <div style={{backgroundColor: props.color}} className="seperator-diamond" />
      </div>
    </div>
  );
}

export default Seperator;
