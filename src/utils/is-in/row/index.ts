import { GRID, NUMBERS } from 'typings';
interface Input {
  grid: GRID;
  row: number;
  value: NUMBERS;
}
/**
 * A function that returns true if the value already exists in the current grid row
 * @param input object with 9x9 grid, row index, value
 */
export default function isInRow({ grid, row, value }: Input): boolean {
  return grid[row].includes(value);
}
