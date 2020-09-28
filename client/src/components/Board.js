import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { setLockedCell } from "../actions/index.js";

class Board extends React.Component {
  constructor() {
    super();
  }

  // Toggles the locked state of a cell
  toggleLock(index, value) {
    let isLocked = this.props.locked;

    if (isLocked) {
      // If the clicked cell has already been locked, unlock it
      if (index == this.props.cellId) {
        isLocked = !isLocked;
      }
    }
    // Otherwise the board is unlocked, just lock the clicked cell
    else {
      isLocked = !isLocked;
    }
    const cellId = index;
    const cellValue = value;
    this.props.dispatch(setLockedCell({ isLocked, cellId, cellValue }));
  }

  render() {
    const boxes = ["", "", "", "", "", "", "", "", ""];
    let id = -1;
    return (
      <div className="container">
        <div className="board">
          {this.props.board.map((cell, index) => {
            ++id;
            const text = cell == "." ? "" : cell;
            const style =
              index == this.props.cellId && this.props.locked
                ? "cell locked"
                : "cell";
            return (
              <div
                key={id}
                className={style}
                onClick={() => this.toggleLock(index, cell)}
              >
                <div className="cell-text">{text}</div>
              </div>
            );
          })}
        </div>
        <div className="overlay">
          {boxes.map((cell, index) => {
            ++id;
            return <div key={id} className="cell-overlay"></div>;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { board: state.board, locked: state.locked, cellId: state.cellId };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
