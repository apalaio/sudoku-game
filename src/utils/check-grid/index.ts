import { GRID } from 'typings';

/**
 * A function to check if the grid is full
 * @param grid a 9x9 sudoku grid
 */
export default function checkGrid(grid: GRID): Boolean {
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++) if (grid[i][j] === 0) return false;
  return true;
}
