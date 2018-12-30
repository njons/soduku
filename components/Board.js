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
    console.log("this is board:", board);
    // do all the jazz
    board = this.addRandNum(board);
    // board = this.addRandNum(board, x, y);
    console.log("this is the filled board:", board);
    // return board;

    // board = this.addCoordinates(board);
    return board;
  }

  addRandNum(board) {
    return board.map(sq => (sq.value = randNum(6)));
  }

  // logic(x, y) {
  //   console.log("this is logic");
  // }
  // addCoordinates(board) {
  //   // // console.log("this is x:", x);
  //   // // console.log("this is y:", y);
  //   // let x = 1;
  //   // let y = 1;
  //   // for (let i = 0; i < board; i++) {
  //   //   board.push([]);
  //   //   console.log("this is column:", i);
  //   //   // console.log("this is number:", x);
  //   //   console.log("this is board:", board);
  //   //   // id++;
  //   //   // board.push(id);
  //   // }
  //
  //   console.log("time ot add coordinates x and y");
  // }

  // setNumbers(board) {
  //   let x = randNum(6);
  //   let y = randNum(60);
  //   console.log("this is random x:", x);
  //   console.log("this is random y:", y);
  //
  //   return x, y;
  // }
  // function that sets up the board?
  // takes in number from square and checks if match?

  // end the game (win)

  render() {
    return (
      <div id="container">
        <Header />
        <div id="board">
          {this.state.boardNumbers.map((square, i) => (
            <Square value={square.value} displayed={square.displayed} key={i} />
          ))}
        </div>
      </div>
      // board render
      // use the board state (if holds answers) and insert the values given to each square
    );
  }
}

export default Board;
