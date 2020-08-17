import styled, { css } from 'styled-components';
// import { theme } from '../../../styles';

export const Title = styled.h1`
  /* destructuring "theme" from props */
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-top: 0;
    text-align: center;
  `}
`;
