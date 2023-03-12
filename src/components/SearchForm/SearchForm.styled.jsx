import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border: 3px solid navy;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 10px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 50px;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  width: 60px;
  height: 50px;
  background-color: navy;
  border-radius: 10px;
  cursor: pointer;
  border: 0;
  transition: background-color 250ms linear;
  :hover,
  :focus-visible {
    background-color: yellow;
  }
`;

export const SearchIcon = styled(BsSearch)`
  width: 30px;
  height: 30px;
  fill: yellow;
  transition: fill 250ms linear;
  :hover,
  :focus-visible {
    fill: navy;
  }
`;
