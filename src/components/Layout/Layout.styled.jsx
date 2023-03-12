import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Header = styled.header`
  padding-top: 20px;
  height: 70px;
  background-color: navy;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const NavigationLink = styled(NavLink)`
  padding: 12px;
  height: 30px;
  width: 70px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
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

export const Footer = styled.footer`
  padding: 10px;
  height: 70px;
  background-color: navy;
  color: yellow;
`;
