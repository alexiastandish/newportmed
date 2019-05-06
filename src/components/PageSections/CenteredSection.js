import React, { Component } from "react";
//import './PS-LeftText.css';
import { Waypoint } from "react-waypoint";
import DescCentered from "../SectionDescs/DescCentered";

class CenteredSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView: false
    };
  }

  onEnter = ({ previousPosition }) => {
    setTimeout(() => {
      if (
        previousPosition === Waypoint.below ||
        previousPosition === Waypoint.above
      ) {
        this.setState({ isInView: true });
      }
    }, 100);
  };

  onLeave = ({ previousPosition }) => {
    setTimeout(() => {
      if (previousPosition === Waypoint.inside) {
        this.setState({ isInView: false });
      }
    }, 100);
  };

  render() {
    const { info, className, buttonStyle } = this.props;
    console.log("this.state", this.state);
    return (
      <div
        className={
          this.state.isInView
            ? `horizontal-section secondary-section ${className} background-blue`
            : `horizontal-section secondary-section ${className} background-white`
        }
        id="mySVG"
      >
        <Waypoint onEnter={this.onEnter} onLeave={this.onLeave} />
        <div className="section section__centered">
          <DescCentered
            header={info.header}
            desc={info.desc}
            button={info.button}
            buttonStyle={buttonStyle}
          >
            {this.props.children}
          </DescCentered>
        </div>
      </div>
    );
  }
}
export default CenteredSection;
