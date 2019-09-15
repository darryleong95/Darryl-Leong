import React from "react";
import SectionHeader from "../sectionheader/SectionHeader";
import { badges } from "../../constants";
import "./Badges.scss";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
    this.container = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { top, bottom } = this.container.current.getBoundingClientRect();
    if (top - window.innerHeight < 0 && bottom > 0) {
      this.setState({
        isToggle: true
      });
    }
  };

  render() {
    return (
      <div className="badges" ref={this.container}>
        <SectionHeader
          title="CERTIFICATIONS"
          color="white"
          toggle={this.state.isToggle}
        />
        <div className="badges-wrapper">
          {badges.map(val => {
            return (
              <div
                className={
                  "badges-blocks " +
                  (this.state.isToggle ? "content-animation" : null)
                }
              >
                <img className="badges-logoimg" src={val.img} />
                <p className="name">{val.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Badges;
