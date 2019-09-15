import React from "react";
import "./Footer.scss";

import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="primary-wrapper">
          <h2 className="primary-header">LET'S GET IN TOUCH</h2>
          <p className="primary-text">
            Like what you saw? Feel free to drop me an email at xxxxxxxxxxx@gmail.com. I'll get
            back to you as soon as I can.
          </p>
        </div>
        <hr />
        <div className="secondary-wrapper">
          <p className="secondary-header">
            Alternatively, you can reach me at any of the following:
          </p>
          <table className="sm-contact-wrapper">
            <tr>
              <td>
                <FaGithub size="1em" className="sm-contact-icon" />
              </td>
              <td>
                <a
                  href="https://github.com/darryleong95"
                  target="_blank"
                  className="sm-contact-link"
                >
                  https://github.com/darryleong95
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <FaFacebook size="1em" className="sm-contact-icon" />
              </td>
              <td>
                <a
                  href="https://www.facebook.com/darryl.v.leong"
                  target="_blank"
                  className="sm-contact-link"
                >
                  https://www.facebook.com/darryl.v.leong
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <FaInstagram size="1em" className="sm-contact-icon" />
              </td>
              <td>
                <a
                  href="https://www.instagram.com/darryleong/"
                  target="_blank"
                  className="sm-contact-link"
                >
                  https://www.instagram.com/darryleong/
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <FaLinkedin size="1em" className="sm-contact-icon" />
              </td>
              <td>
                <a
                  href="https://www.linkedin.com/in/darrylleong/"
                  target="_blank"
                  className="sm-contact-link"
                >
                  https://www.linkedin.com/in/darrylleong/
                </a>
              </td>
            </tr>
          </table>
        </div>
        <hr />
        <footer className="copyright">
          <small>&copy; Copyright 2018, Darryl Leong</small>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
