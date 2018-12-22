import React from "react";
import PropTypes from "prop-types";

class Square extends React.Component {
  state = {
    text: 5
    //state for this?
    // not display correct number
  };

  render() {
    return (
      <div id="square">
        <input id="text" />
      </div>
    );
  }
}

Square.propTypes = {
  text: PropTypes.number
};

export default Square;
