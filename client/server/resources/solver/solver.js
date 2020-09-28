// Validates if a solution is valid for a cell's unit (row, column and box)
export function isPossible(board, row, col, value) {
  for (let i = 0; i < 9; i++) {
    // Calculate the position of cell to validate in the box
    var boxRow = Math.floor(row / 3) * 3 + Math.floor(i / 3);
    var boxCol = Math.floor(col / 3) * 3 + Math.floor(i % 3);

    // Row, column, then box validation
    if (
      board[row][i] == value ||
      board[i][col] == value ||
      board[boxRow][boxCol] == value
    ) {
      return false;
    }
  }
  return true;
}

// Iterates through the board, and attempts to solve each cell
export function solve(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] == ".") {
        for (let value = 1; value <= 9; value++) {
          if (isPossible(board, row, col, value)) {
            board[row][col] = value;
            if (solve(board)) {
              return true;
            } else {
              board[row][col] = ".";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
