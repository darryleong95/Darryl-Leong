import React from "react";
import SectionHeader from "../sectionheader/SectionHeader";
import "./DualColumnSection.scss";

class DualColumnSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
    this.container = React.createRef();
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
    const { top, bottom } = this.container.current.getBoundingClientRect();
    if (top - window.innerHeight < 0 && bottom > 0) {
      this.setState({
        isToggle: true
      });
    }
  };

  render() {
    return (
      <div
        style={{ backgroundColor: this.props.bg }}
        className={"dcs-container"}
        ref={this.container}
      >
        <SectionHeader
          title={this.props.title}
          bgcolor={this.props.sep_bg}
          seperatorcolor={this.props.sep}
          toggle={this.state.isToggle}
        />
        <div className="dcs-wrapper">
          {this.props.info.map(val => {
            return (
              <div
                style={{ backgroundColor: this.props.blockbg }}
                className={
                  "dcs-info-block " +
                  (this.state.isToggle ? "content-animation" : null)
                }
              >
                <div className="dcs-img-wrapper">
                  <img className="dcs-img" src={val.img} />
                </div>
                <div className="dcs-content">
                  <p className="dcs-content-title">{val.title}</p>
                  <p className="dcs-content-subtitle">{val.subtitle}</p>
                  <p className="dcs-write-up">{val.writeup}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DualColumnSection;
