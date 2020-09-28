import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { loadBoard } from "./actions/index.js";
import Board from "./components/Board";

class App extends React.Component {
  constructor() {
    super();
  }

  // Load a board initially
  componentDidMount() {
    fetch("http://localhost:8080/sudoku/board/")
      .then((res) => res.json())
      .then((json) => {
        this.props.dispatch(loadBoard(json));
      });
  }

  // Callback for refresh button - makes a PUT request if a cell is locked, and a GET request otherwise
  handleClick(isLocked, cellId, cellValue) {
    if (isLocked) {
      const reqBody = JSON.stringify({
        cellId: cellId,
        cellValue: cellValue,
      });
      fetch("http://localhost:8080/sudoku/board/", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: reqBody,
      })
        .then((res) => res.json())
        .then((json) => {
          this.props.dispatch(loadBoard(json));
        });
    } else {
      fetch("http://localhost:8080/sudoku/board/")
        .then((res) => res.json())
        .then((json) => {
          this.props.dispatch(loadBoard(json));
        });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Board />
          <div>
            <button
              type="submit"
              onClick={() =>
                this.handleClick(
                  this.props.locked,
                  this.props.cellId,
                  this.props.cellValue
                )
              }
            >
              REFRESH
            </button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locked: state.locked,
    cellId: state.cellId,
    cellValue: state.cellValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
