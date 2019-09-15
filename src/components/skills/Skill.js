import React from "react";
import SectionHeader from "../sectionheader/SectionHeader";
import "./Skills.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "../progressbar/ProgressBar";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
    this.skill = React.createRef();
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const {top, bottom} = this.skill.current.getBoundingClientRect();
    if (top - window.innerHeight < 0 && bottom > 0) {
      this.setState({
        isToggle: true
      });
    }
  };

  render() {
    return (
      <div className="skills" ref={this.skill}>
        <SectionHeader
          textcolor="white"
          title="COMPETENCIES"
          bgcolor="rgb(26,30,35)"
          seperatorcolor="white"
          toggle={this.state.isToggle}
        />
        <div className="progress-wrapper">
          {skill.map(val => {
            return (
              <ProgressBar
                skill={val.skill}
                progress={val.progress}
                toggle={this.state.isToggle}
              />
            );
          })}
        </div>
        <div className="circular-progress-wrapper">
          {other.map(val => {
            return (
              <div className="indiv-circle-container">
                <div className="indiv-circle-wrapper">
                  <CircularProgressbar
                    text={`${val.progress}%`}
                    value={val.progress}
                    strokeWidth={8}
                    styles={buildStyles({
                      strokeLinecap: "round",
                      textColor: "white",
                      pathColor: "rgb(250,207,80)",
                      trailColor: "white",
                      textSize: "16px"
                    })}
                  />
                  <p className="circular-name">{val.skill}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const skill = [
  {
    skill: "ReactJS",
    progress: "80%"
  },
  {
    skill: "UI/UX Design",
    progress: "70%"
  },
  {
    skill: "AngularJS",
    progress: "60%"
  },
  {
    skill: "VueJS",
    progress: "60%"
  },
  {
    skill: "SpringBoot",
    progress: "50%"
  },
  {
    skill: "Flutter",
    progress: "80%"
  }
];

const other = [
  {
    skill: "Motivation",
    progress: 100
  },
  {
    skill: "Teamwork",
    progress: 100
  },
  {
    skill: "Communication",
    progress: 80
  }
];

export default Skills;
