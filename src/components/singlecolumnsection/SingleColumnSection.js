import React from "react";

import InfoBlock from "../infoblock/InfoBlock";
import SectionHeader from "../sectionheader/SectionHeader";

import "./SingleColumnSection.scss";

class SingleColumnSection extends React.Component {
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
        className="single-column-section-container"
        ref={this.container}
      >
        <SectionHeader
          textcolor={this.props.headercolor}
          title={this.props.title}
          bgcolor={this.props.sep_bg}
          seperatorcolor={this.props.sep}
          toggle={this.state.isToggle}
        />
        {this.props.info.map(val => {
          return (
            <InfoBlock
              img={val.img}
              header1={val.header1}
              header2={val.header2}
              header3={val.header3}
              writeup={val.writeup}
              toggle={this.state.isToggle}
            />
          );
        })}
      </div>
    );
  }
}

export default SingleColumnSection;
