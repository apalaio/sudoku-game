import { NUMBERS, SQUARE } from 'typings';

interface Input {
  square: SQUARE;
  value: NUMBERS;
}
/**
 * returns true if the value is already in the current grid square
 * @param input Object with 3x3 square and the value we are checking
 */
export default function isInSquare({ square, value }: Input): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}
