import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";
// import Input from "./Input";

class Square extends React.Component {
  state = {
    value: 0

    //state for this?
    // not display correct number
    // this holds the random number
  };

  render() {
    return (
      <div id="square">
        <p className="text">{this.props.value}</p>
      </div>
    );
  }
}

export default Square;
