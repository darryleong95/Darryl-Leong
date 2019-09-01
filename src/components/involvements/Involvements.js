import React from "react";
import ifg from "../../assets/img/ifg.jpg";
import captain from "../../assets/img/captain.jpg";
import "./Involvements.css";

function Involvements() {
  return (
    <div className="school">
      <div className="title-wrapper">
        <h2>INVOLVEMENTS</h2>
      </div>
      <div className="blocks">
        <div className="logo">
          <img className="logoimg" src={ifg} />
        </div>
        <div className="info">
          <h3>Faculty Sport's Director</h3>
          <h5>Aug 2016 - Aug 2017</h5>
          <p className="write-up">
            Coordinated and oversaw a of 3D2N sports camp for 100 faculty
            students In charge of overseeing faculty teams for the Inter-Faculty
            Sports Games (IFG) involving 1600 Faculty Members Organized and
            hosted DOTA2 E-sport event during faculty games, involving up to 80
            participants Established recreational sports sessions for faculty
            students (Dodgeball, Badminton, Tennis) with estimated 50
            participating students
          </p>
        </div>
      </div>
      <div className="blocks">
        <div className="logo">
          <img className="logoimg" src={captain} />
        </div>
        <div className="info">
          <h3>Sports Captain</h3>
          <h4>
            Faculty Touch Rugby, Road Relay Captain, Sheares
            Hall Track and Field Vice Captain 
          </h4>
          <h5>Aug 2016 - Aug 2017</h5>
          <p className="write-up">
            Had the great pleasure of organizing and training with teammates for
            both the Inter-Hall and Inter-Faculty games.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Involvements;
