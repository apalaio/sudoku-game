import { GRID, BLOCK_COORDS } from 'typings';

export interface Reducer {
  challengeGrid?: GRID;
  solvedGrid?: GRID;
  workingGrid?: GRID;
  selectedBlock?: BLOCK_COORDS;
}
