import React, { FC } from 'react';
import { NUMBERS } from 'typings';
import { Container } from './styles';
import Button from './button';

/**
 * Number buttons container
 */
const Numbers: FC = () => {
  return (
    <Container>
      {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map((number) => (
        <Button key={number} value={number} />
      ))}
    </Container>
  );
};

export default Numbers;
