/* eslint-disable */

import { generate } from "../resources/board/generator.js";

let board = [];

beforeEach(() => {
  board = generate(9, 0);
});

test("returns anything", () => {
  expect(board).toEqual(expect.anything());
});

test("seed not removed", () => {
  expect(board[0][0]).toEqual(9);
});
