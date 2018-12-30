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
    board = this.addNum(board);
    console.log("this is the board filled with numbers:", board);
    board = this.addId(board);
    console.log("this is the board filled with ids:", board);
    board = this.validateRow(board, x, y);
    // let board = this.addNum(x, y);
    // console.log("this is the filled board:", board);
    // console.log("this is the validated board:", board);
    return board;
  }

  addNum(board) {
    // console.log("this is board in validateRow():", board);
    // add in all numbers by row
    for (let i = 0; i < 30; i++) {
      board.push(board[i]);
    }
    return board;
  }

  addId(board) {
    return board.map((sq, i) => ({
      value: sq.value,
      displayed: sq.displayed,
      id: i
    }));
  }

  validateRow(board, x, y) {
    console.log("this is board in validateRow():", board);
    console.log("this is x in validateRow():", x);
    console.log("this is y in validateRow():", y);
    let singleVals = [];
    // console.log("this is filledRow:", filledRow);
    // ensure no duplicates by column
    // for (let i = 0; i < board.length; i++) {
    // for (let i = 0; i < board.length - 1; i++) {
    const allowedVals = board.filter(sq => {
      console.log("this is sq.value in validateRow():", sq.value);
      // console.log("this is sq.id in validateRow():", sq.id);

      let currVal = sq.value;
      // let nextVal = board[i + 1].value;

      console.log("this is currVal in validateRow():", currVal);
      // console.log("this is nextVal in validateRow():", nextVal);
      // console.log("this is singleVals in validateRow():", singleVals);

      if (singleVals.indexOf(currVal) === -1) {
        console.log("new value found");
        return singleVals.push(currVal);
        console.log("this is singleVals:", singleVals);
      }
    });

    allowedVals;

    // console.log("this is singleVals in validateRow():", singleVals);

    console.log("this is filledBoard in validateRow():", filledBoard);
    // return filledBoard;
    // // console.log("this is sq:", sq.value);
    // });
    // console.log(board.push(board[i]));
    // }
    // }

    // console.log("this is the filled board:", board);
    //
    // return board;
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
