import { GRID } from 'typings';
import { getRandomIndex, copyGrid, solveGrid } from 'utils';
import global from 'global';
/**
 * Removes numbers from a full grid to create a sudoku puzzle
 * @param grid a 9x9 sudoku grid
 * @param attempts number of attempts to solve (higher number => higher difficulty or sudoku)
 */
export default function removeNumbers(grid: GRID, attempts = 5): GRID {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    const backup = grid[row][col];
    grid[row][col] = 0;

    const gridCopy = copyGrid(grid);
    global.counter = 0;
    solveGrid(gridCopy);

    if (global.counter !== 1) {
      grid[row][col] = backup;
      attempts--;
    }
  }
  return grid;
}
