import React from "react";
import SectionHeader from "../sectionheader/SectionHeader";
import "./ImageSection.scss";

class ImageSection extends React.Component {
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
        className="is-container"
        ref={this.container}
      >
        <div className="is-wrapper">
          <SectionHeader
            textcolor={this.props.headercolor}
            title={this.props.title}
            bgcolor={this.props.sep_bg}
            seperatorcolor={this.props.sep}
            toggle={this.state.isToggle}
          />
          <div
            className={
              "is-img-wrapper " +
              (this.state.isToggle ? "content-animation" : null)
            }
          >
            <div>
              <img className="is-img" src={this.props.img} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSection;
