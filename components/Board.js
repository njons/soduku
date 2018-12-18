import React from "react";
import randNum from "../utils/randNum";

class Board extends React.Component {
  state = {
    boardArray: this.generateBoard(2, 3) // generates the grid (and holds answers?)
  };

  generateBoard(x, y) {
    console.log("this is x:", x);
    console.log("this is y:", y);

    let board = [];
    // let id = 0;
    for (let i = 0; i < 2; i++) {
      console.log("this is row:", i);
      console.log("this is row:", x);
      board.push("5");
      console.log("this is board:", board);
      for (let j = 0; j < 3; j++) {
        console.log("this is row:", j);
        console.log("this is row:", y);
        board.push("10");
        console.log("this is board:", board);
      }
    }
    return board;
  }

  // function that sets up the board?
  // takes in number from square and checks if match?

  // end the game (win)

  render() {
    return (
      <div id="container">
        <header>
          <h1>This is the title</h1>
          <p>This is a paragraph that can give further explanation</p>
        </header>
        <div id="board">{this.state.boardArray}</div>
      </div>
      // board render
      // use the board state (if holds answers) and insert the values given to each square
    );
  }
}

export default Board;
