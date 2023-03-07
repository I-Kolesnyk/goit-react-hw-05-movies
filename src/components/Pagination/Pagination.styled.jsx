import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';

export const StyledPagination = styled(ReactPaginate)`
  margin-top: 50px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  list-style-type: none;
  padding: 0;

  li a {
    height: 100px;
    width: 30px;
    border-radius: 7px;
    padding: 5px 10px;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 42px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
