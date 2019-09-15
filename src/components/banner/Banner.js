import React from "react";

import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

import "./Banner.scss"

function Banner() {
  return (
    <div className="header-wrapper">
      <h4 className="header-text-first">Hey, I'm</h4>
      <h4 className="header-text-second">Darryl Leong</h4>
      <div className="sm-wrapper">
        <a
          className="sm-link"
          href="https://github.com/darryleong95"
          target="_blank"
        >
          <FaGithub size="3em" className="sm-icon" />
        </a>
        <a
          className="sm-link"
          href="https://www.instagram.com/darryleong/"
          target="_blank"
        >
          <FaInstagram size="3em" className="sm-icon" />
        </a>
        <a
          className="sm-link"
          href="https://www.facebook.com/darryl.v.leong"
          target="_blank"
        >
          <FaFacebook size="3em" className="sm-icon" />
        </a>
      </div>
    </div>
  );
}

export default Banner;
