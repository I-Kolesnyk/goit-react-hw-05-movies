import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
  height: 30px;
  width: 130px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  background-color: navy;
  color: yellow;
  border-radius: 10px;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover,
  &:focus-visible {
    background-color: yellow;
    color: navy;
  }
`;
