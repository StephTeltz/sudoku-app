import { solve } from "../solver/solver.js";

export function generate(seed, seedIndex) {
  // Create empty board
  let board = [];
  for (let i = 0; i < 9; i++) {
    board[i] = [".", ".", ".", ".", ".", ".", ".", ".", "."];
  }

  // Generate and apply seed
  let seedRow = Math.floor(seedIndex / 9);
  let seedCol = Math.floor(seedIndex % 9);
  board[seedRow][seedCol] = seed;

  // Solve to complete the board
  solve(board);

  // Remove random solutions (excluding the seed)
  removeSolutions(board, 17, seedRow, seedCol, seed); // 17 clues is the minimum required for a solvable board

  return board;
}

// Removes solutions from the board such that n clues remain, and always restores the seeded value if removed
function removeSolutions(board, numClues, seedRow, seedCol, seed) {
  const numToRemove = 81 - numClues;
  for (let i = 0; i < numToRemove; i++) {
    let [row, col] = getRandomNonEmptyPosition(board, seedRow, seedCol);
    board[row][col] = ".";
    if (row == seedRow && col == seedCol) {
      board[row][col] = seed;
    }
  }
}

// Helper function that returns a pseudo-random value between 0 and max (max-exclusive)
export function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Helper function that returns a random, non-empty position on the board
function getRandomNonEmptyPosition(board, seedRow, seedCol) {
  // Choose a random cell
  const row = getRandom(9);
  const col = getRandom(9);

  // Check its not already empty to avoid duplication which results in incorrect number of clues
  if (isNonEmpty(board, row, col)) {
    return [row, col];
  } else {
    return getRandomNonEmptyPosition(board, seedRow, seedCol);
  }
}

// Helper function, checks if a cell is empty
function isNonEmpty(board, row, col) {
  if (board[row][col] == ".") {
    return false;
  } else return true;
}
