import { AnyAction } from 'redux';
import { Reducer } from './interfaces';
import * as types from './types';
import { createFullGrid, removeNumbers, copyGrid, compareArrays } from 'utils';
import { GRID } from 'typings';

const initialState: Reducer = {};

export default function reducer(
  state = initialState,
  action: AnyAction
): Reducer {
  switch (action.type) {
    case types.CREATE_GRID: {
      const solvedGrid = createFullGrid();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy, 5);
      const workingGrid = copyGrid(challengeGrid);
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      };
    }

    case types.FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        //if the input value is not a correct solution:
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert('Incorrect number!');
          return state;
        }
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value;
        if (compareArrays(state.workingGrid, state.solvedGrid))
          alert('Board complete!');
        return { ...state, workingGrid: [...state.workingGrid] as GRID };
      }
      return state;
    }
    case types.SELECT_BLOCK:
      return { ...state, selectedBlock: action.coords };

    default:
      return state;
  }
}
