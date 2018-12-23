import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";

class Square extends React.Component {
  state = {
    //state for this?
    // not display correct number
    // this holds the random number
  };

  render() {
    return (
      <div id="square">
        <Input />
      </div>
    );
  }
}

export default Square;
