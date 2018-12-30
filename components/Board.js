import React from "react";
import Square from "./Square";
import Header from "./Header";
import randNum from "../utils/randNum";

class Board extends React.Component {
  state = {
    boardNumbers: this.createGrid(1, 6) // generates empty grid
  };

  createGrid(x, y) {
    // itereate over small grid 6 times
    let board = [];
    let id = 0;
    let value = 1;

    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        board.push({ value, displayed: false, id });
        value++;
        id++;
      }
    }
    // do all the jazz
    board = this.validateRow(board, x, y);
    // let board = this.addNum(x, y);
    // console.log("this is the filled board:", board);
    // console.log("this is the validated board:", board);
    return board;
  }

  // addNum(x, y) {
  //
  // }

  // addNum(board) {
  //   console.log("you've reached addRandNum:");
  //   // console.log("board in addRandNum:", board);
  //   // console.log("filledBoard in addRandNum:", filledBoard);
  //   let num = 1;
  //
  //   console.log("num is less than 5");
  //   // console.log("this is num", num);
  //   const nums = [1, 2, 3, 4, 5, 6];
  //   for (let i = 0; i < nums.length; i++) {
  //     return board.map(sq => ({
  //       value: nums[i],
  //       displayed: sq.displayed,
  //       id: sq.id
  //     }));
  //   }
  //
  //   console.log("this is board", board);
  //
  //   console.log("num is more than 5");
  //   this.addNum(filledBoard);
  //   console.log("filledBoard in addRandNum:", filledBoard);
  //   // return filledBoard;
  // }

  validateRow(board, x, y) {
    console.log("this is board in validateRow():", board);

    // add in all numbers by row
    for (let i = 0; i < 30; i++) {
      board.push(board[i]);
      // ensure no duplicates by column add in all numbers by row
    }

    console.log("this is the filled board:", board);

    return board;
    // validation need to fulfill 3 criteria
    // allowed numbers are 1-6
    // 1. rows: can only contain one of each allowed nums (id is sequential, breaks at every 6th number)
    // 2. columns: can only contain one of each allowed nums (id breaks at every 6th number)
    // 3. sequence of 6 squares: can only contain one of each allowed nums (((id)&(id+1)) + ((id+6)&(id+7)) + ((id+13)&(id+14)))

    // console.log("this is the board coordinates:", board[x][y]);
    // const validRowBoard = board.map(sq => {
    //
    // });
    // console.log("this is row number:", x);
    // console.log("this is square number:", y);
    // board.map(row => {
    //   console.log("this is square row:", row);
    // });
    // console.log("this is validateRow");
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
