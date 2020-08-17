import React, { FC, useCallback } from 'react';
import { NUMBERS, BLOCK_COORDS, N } from 'typings';
import { Button } from 'components';
import { fillBlock, Reducer } from 'reducers';
import { AnyAction, Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

interface NumberButtonProps {
  value: NUMBERS;
}

interface State {
  selectedBlock?: BLOCK_COORDS;
  selectedValue?: N;
}

const NumberButton: FC<NumberButtonProps> = ({ value }) => {
  const state = useSelector<Reducer, State>(
    ({ selectedBlock, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  );

  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const fill = useCallback(() => {
    if (state.selectedBlock && state.selectedValue === 0)
      dispatch(fillBlock(value, state.selectedBlock));
  }, [dispatch, state.selectedBlock, state.selectedValue, value]);
  return <Button onClick={fill}>{value} </Button>;
};

export default NumberButton;
