import React from "react";
import Square from "./Square";
import randNum from "../utils/randNum";

class Board extends React.Component {
  state = {
    boardNumbers: this.createGrid(5, 5) // generates the grid
  };

  createGrid(x, y) {
    console.log("this is generateBoard()");
    let board = [];
    // itereate over small grid 6 times
    for (let i = 0; i < x + 1; i++) {
      for (let j = 0; j < y + 1; j++) {
        board.push([i, j]);
      }
    }
    console.log("this is board:", board);
    return board;
    // set the values in the 6 squares
    // console.log("this is board outside of for loop:", board);
    // board = this.addCoordinates(board);
    // return board;
  }

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
        <header>
          <h1>This is the title</h1>
          <p>This is a paragraph that can give further explanation</p>
        </header>
        <div id="board">
          {this.state.boardNumbers.map((row, i) => (
            <li key={i}>
              {" "}
              <Square />
            </li>
          ))}
        </div>
      </div>
      // board render
      // use the board state (if holds answers) and insert the values given to each square
    );
  }
}

export default Board;
