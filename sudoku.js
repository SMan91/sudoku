function getRow(grid, row) {
  let result = [];

  for (let i = 0; i < grid[row].length; i++) {
    result.push(grid[row][i]);
  }

  return result;
}

function getColumn(grid, col) {
  let result = [];
  for (let i = 0; i < grid[col].length; i++) {
    result.push(grid[i][col]);
  }

  return result;
}

function getSection(grid, x, y) {
  let result = [];
  for (let i = x * 3; i < x * 3 + 3; i++) {
    for (let j = y * 3; j < y * 3 + 3; j++) {
      result.push(grid[i][j]);
    }
  }
  return result;
}

function includes1to9(arr) {
  result = true;

  for (let i = 1; i <= arr.length; i++) {
    if (arr.indexOf(i) === -1) {
      result = false;
      break;
    }

    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        count++;
      }
    }
    if (count !== 1) {
      result = false;
    }
  }

  return result;
}

function sudokuIsValid(puzzle) {
  let row;
  let col;
  let sec;

  for (let i = 0; i < 9; i++) {
    row = getRow(puzzle, i);
    if (!includes1to9(row)) {
      return false;
    }
    col = getColumn(puzzle, i);
    if (!includes1to9(col)) {
      return false;
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      sec = getSection(puzzle, i, j);
      if (!includes1to9(sec)) {
        return false;
      }
    }
  }

  return true;
}

function isSame(puz1, puz2) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (puz1[i][j] !== puz2[i][j]) {
        return false;
      }
    }
  }

  return true;
}

let puzzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],

  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],

  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];

let puzzlecopy = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],

  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],

  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];

let invpuzzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],

  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 1, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],

  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];

// console.log(getRow(puzzle, 1));
// console.log(getColumn(puzzle, 1));

// console.log("Grids");
// console.log(getSection(puzzle, 0, 0));
// console.log(getSection(puzzle, 1, 0));
// console.log(getSection(puzzle, 2, 0));

// console.log(getSection(puzzle, 0, 1));
// console.log(getSection(puzzle, 0, 2));

// console.log(getSection(puzzle, 1, 1));
// console.log(getSection(puzzle, 1, 2));

// console.log(getSection(puzzle, 2, 1));
// console.log(getSection(puzzle, 2, 2));

// console.log(sudokuIsValid(puzzle));
// console.log(sudokuIsValid(invpuzzle));

// console.log(isSame(puzzle, invpuzzle));
// console.log(isSame(puzzle, puzzlecopy));
