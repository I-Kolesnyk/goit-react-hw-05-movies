import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  height: auto;
  width: 240px;
  background-color: navy;
  text-align: center;
  border-radius: 10px;
  transform: scale(1);
  transition: transform 250ms linear;
  &:hover {
    transform: scale(1.04);
  }
`;

export const GalleryImage = styled.img`
  display: block;
  height: 360px;
  width: 100%;
  border-radius: 10px;
`;

export const MovieTitle = styled.p`
  margin: 0;
  padding: 10px;
  color: yellow;
  font-size: 18px;
`;
