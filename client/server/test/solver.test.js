/* eslint-disable */

import { solve, isPossible } from "../resources/solver/solver.js";

let mockBoard = [];

beforeEach(() => {
  let board = [];
  for (let i = 0; i < 9; i++) {
    board[i] = [".", ".", ".", ".", ".", ".", ".", ".", "."];
  }
  mockBoard = board;
});

test("value is possible on mock grid", () => {
  let result = isPossible(mockBoard, 8, 8, 1);
  expect(result).toBeTruthy();
});

test("mock board full", () => {
  solve(mockBoard);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      expect(mockBoard[j]).not.toBe(".");
    }
  }
});
