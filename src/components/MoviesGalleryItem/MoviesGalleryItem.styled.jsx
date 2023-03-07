import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding-bottom: 10px;
  height: auto;
  width: 260px;
  background-color: navy;
  text-align: center;
`;

export const GalleryImage = styled.img`
  display: block;
  height: 95%;
  width: 100%;
`;

export const MovieTitle = styled.p`
  margin: 0;
  color: yellow;
`;
