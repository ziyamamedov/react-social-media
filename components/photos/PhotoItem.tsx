import styled from "styled-components";

export interface PhotoItemProps {
  url: string;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ url }) => {
  return (
    <StyledPhotoItem>
      <img src={url} alt="Photo" />
    </StyledPhotoItem>
  );
};

export default PhotoItem;

const StyledPhotoItem = styled.div`
  width: 185px;
  height: 127px;
  margin: 0.5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
