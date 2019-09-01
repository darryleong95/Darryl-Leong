import React from "react";
import aws from '../../assets/img/aws.png';
import ica from '../../assets/img/ica.jpg';
import "./Badges.css";

function Badges() {
  return (
    <div className="badges">
      <div className="title-wrapper">
        <h2>POKEMON BADGES</h2>
      </div>
      <div className="badges-wrapper">
        <div className="badges-blocks">
          <div className="badges-logo">
            <img className="badges-logoimg" src={aws} />
            <p className="name">AWS Solution Architect Associate</p>
          </div>
        </div>
        <div className="badges-blocks">
          <div className="badges-logo">
            <img className="badges-logoimg" src={ica} />
            <p className="name">ICAgile Professional</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Badges;
