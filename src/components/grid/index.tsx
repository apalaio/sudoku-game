import React, { FC, Children, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row } from './styles';
import useMousetrap from 'react-hook-mousetrap';
import { INDEX, BLOCK_COORDS, NUMBERS, N, GRID } from 'typings';
import Block from './block';
import { AnyAction, Dispatch } from 'redux';
import { createGrid, Reducer, selectBlock, fillBlock } from 'reducers';

interface State {
  selectedBlock?: BLOCK_COORDS;
  selectedValue: N;
  solvedGrid?: GRID;
}

const Grid: FC = () => {
  const state = useSelector<Reducer, State>(
    ({ selectedBlock, solvedGrid, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
      solvedGrid,
    })
  );

  const dispatch = useDispatch<Dispatch<AnyAction>>();
  /**
   * ->memoized<-  creates the grid
   */
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);

  const fill = useCallback(
    (n: NUMBERS) => {
      if (state.selectedBlock && state.selectedValue === 0)
        dispatch(fillBlock(n, state.selectedBlock));
    },
    [dispatch, state.selectedBlock, state.selectedValue]
  );

  function moveDown() {
    if (state.selectedBlock && state.selectedBlock[0] < 8)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
  }

  function moveUp() {
    if (state.selectedBlock && state.selectedBlock[0] > 0)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
  }

  function moveLeft() {
    if (state.selectedBlock && state.selectedBlock[1] > 0)
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] - 1) as INDEX,
        ])
      );
  }

  function moveRight() {
    if (state.selectedBlock && state.selectedBlock[1] < 8)
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] + 1) as INDEX,
        ])
      );
  }
  useMousetrap('1', () => {
    fill(1);
  });
  useMousetrap('2', () => {
    fill(2);
  });
  useMousetrap('3', () => {
    fill(3);
  });
  useMousetrap('4', () => {
    fill(4);
  });
  useMousetrap('5', () => {
    fill(5);
  });
  useMousetrap('6', () => {
    fill(6);
  });
  useMousetrap('7', () => {
    fill(7);
  });
  useMousetrap('8', () => {
    fill(8);
  });
  useMousetrap('9', () => {
    fill(9);
  });

  useMousetrap('down', moveDown);
  useMousetrap('left', moveLeft);
  useMousetrap('up', moveUp);
  useMousetrap('right', moveRight);

  useEffect(() => {
    if (!state.solvedGrid) create();
  }, [create, state.solvedGrid]);

  return (
    <Container data-cy="grid-container">
      {/* Used Children.toArray() instead of giving a key to the elements of the arrays rendered */}
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  rowIndex={rowIndex as INDEX}
                  colIndex={colIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
