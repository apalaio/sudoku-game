import { GRID, NUMBERS } from 'typings';

interface Input {
  grid: GRID;
  col: number;
  value: NUMBERS;
}
/**
 * returns true if the value is already in the current grid column
 * @param input 9x9 sudoku grid, column index, value
 */
export default function isInCol({ grid, col, value }: Input): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true;
  }
  return false;
}
