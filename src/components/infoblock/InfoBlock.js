import React from "react";

import "./InfoBlock.scss";

const InfoBlock = props => {
  return (
    <div
      className={
        "content-block " +
        (props.toggle ? "content-animation" : null)
      }
    >
      <div className="content-img-wrapper">
        <img className="content-img" src={props.img} />
      </div>
      <div className="info">
        <h3>{props.header1}</h3>
        <h4>{props.header2}</h4>
        <h5>{props.header3}</h5>
        <p className="write-up">{props.writeup}</p>
      </div>
    </div>
  );
};

export default InfoBlock;
