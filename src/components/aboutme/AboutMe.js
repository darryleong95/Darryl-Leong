import React from "react";

import SectionHeader from "../sectionheader/SectionHeader";

import profile from "../../assets/img/profile.JPG";
import profilemobile from "../../assets/img/profile1.jpg";
import doge from "../../assets/img/doge.png";
import dogeMobile from "../../assets/img/dogeMobile.png";

import cv from "../../assets/cv.pdf";
import "./AboutMe.css";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      isToggle: false
    };
    this.container = React.createRef();
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
    window.removeEventListener("scroll", this.handleScroll);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 768 });
  }

  handleScroll = () => {
    const { top, bottom } = this.container.current.getBoundingClientRect();
    if (top - window.innerHeight < -200 && bottom > 200) {
      this.setState({
        isToggle: true
      });
    }
  };

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div className="aboutme" ref={this.container}>
        <SectionHeader
          title="ABOUT ME"
          color="white"
          toggle={this.state.isToggle}
        />
        <div
          className={
            "aboutme-container " +
            (this.state.isToggle ? "content-animation" : null)
          }
        >
          <div className="img-wrapper">
            <div className="profile-img-wrapper">
              <img
                className="profile-img"
                src={isDesktop ? profile : profilemobile}
              />
            </div>
            <div className="bio-info-wrapper">
              <p className="bio-info">
                <b>Name</b>: Darryl Leong
              </p>
              <p className="bio-info">
                <b>Major</b>: Information Systems
              </p>
              <p className="bio-info">
                <b>School</b>: National University of Singapore
              </p>
              <div className="bio-info-doge">
                <div className="loves">
                  <b>Loves</b>: Running, Music, Cheese
                </div>
                <a
                  className="doge-wrapper bounce"
                  href="https://www.instagram.com/hunt_solo_/"
                  target="_blank"
                >
                  <img
                    className="hunt-insta"
                    src={isDesktop ? doge : dogeMobile}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="aboutme-wrapper">
            <div className="aboutme-header">
              <h2 className="aboutme-header-text">
                <span>HEY EVERYONE</span>
              </h2>
            </div>
            <div className="section-body-wrapper">
              <div className="section-body">
                <p>
                  Nice to meet ya, my name is{" "}
                  <span className="bolded-words">Darryl Leong</span>. I'm
                  currently finishing up my last year in college at the{" "}
                  <span className="bolded-words">
                    National University of Singapore
                  </span>
                  . I really enjoy building and working on my own projects,
                  whether it is to serve a functional purpose or explore, I'm
                  always keen to learn something new.
                </p>
                <p>
                  When it comes to tech, I find myself invested in ideas which
                  are able to directly impact the lives of others. Though I
                  don't particularly have a preference towards any
                  stack/technology, I'm very much a believer in taking the
                  "shortest path" possible while balancing my goals of learning
                  new technologies.
                </p>
              </div>
            </div>
            <div className="cv-wrapper">
              <div className="cv-button-wrapper">
                <a href={cv} download="dummycv" className="cv-link">
                  DOWNLOAD MY CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
