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
        // console.log("this is the board:", board);
        // this.addRandNum(board);
        board.push({ value: 0, displayed: false, id });
        id++;
      }
    }
    // do all the jazz
    // board = this.addRandNum(board);
    board = this.addRandNum(board);
    console.log("this is the filled board:", board);
    board = this.validateRow(board, x, y);
    // console.log("this is the validated board:", board);
    // return board;
  }

  addRandNum(board) {
    console.log("you've reached addRandNum:");
    // console.log("board in addRandNum:", board);
    // console.log("filledBoard in addRandNum:", filledBoard);
    const filledBoard = board.map(sq => ({
      value: randNum(6),
      displayed: sq.displayed,
      id: sq.id
    }));
    console.log("filledBoard in addRandNum:", filledBoard);
    return filledBoard;
  }

  validateRow(board, x, y) {
    console.log("this is validateRow:", board);

    console.log("this is the board coordinates:", board[x][y]);
    // const validRowBoard = board.map(sq => {
    //
    // });
    console.log("this is row number:", x);
    console.log("this is square number:", y);
    board.map(row => {
      console.log("this is square row:", row);
    });
    console.log("this is validateRow");
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
