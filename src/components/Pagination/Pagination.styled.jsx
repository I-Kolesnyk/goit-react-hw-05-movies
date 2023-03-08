import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';

export const StyledPagination = styled(ReactPaginate)`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  list-style-type: none;
  padding: 0;

  li a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 7px;
    border: navy 2px solid;
    text-decoration: none;
    font-size: 14px;
    color: navy;
    cursor: pointer;
  }
   li.active a {
    background-color: navy;
    border-color: transparent;
    color: yellow;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
