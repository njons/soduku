import React from "react";
import Square from "./Square";
import Header from "./Header";
import randNum from "../utils/randNum";

class Board extends React.Component {
  state = {
    boardNumbers: this.createGrid(5, 5) // generates empty grid
  };

  createGrid(x, y) {
    let board = [];
    let id = 0;
    // itereate over small grid 6 times
    for (let i = 0; i < x + 1; i++) {
      for (let j = 0; j < y + 1; j++) {
        board.push({ value: 0, displayed: false, id });
        id++;
      }
    }
    // do all the jazz
    board = this.addRandNum(board);
    console.log("this is the filled board:", board);
    return board;
  }

  addRandNum(board) {
    return board.map(sq => (sq.value = randNum(6)));
  }

  render() {
    return (
      <div id="container">
        <Header />
        <div id="board">
          {this.state.boardNumbers.map((square, i) => (
            <Square value={square} displayed="false" key={i} />
          ))}
        </div>
      </div>
      // board render
      // use the board state (if holds answers) and insert the values given to each square
    );
  }
}

export default Board;
