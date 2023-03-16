import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  max-width: 320px;
  margin: 30px auto;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Main = styled.main `
  flex-grow: 1;
`

export const HomeLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  text-decoration: none;
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

export const Image = styled.img`
  width: 400px;
`;
