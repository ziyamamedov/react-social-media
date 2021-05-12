import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../Redux/reducers";
import PhotoItem from "./PhotoItem";
import PhotosModal from "./PhotosModal";

type PhotosListProps = {
  userId: number;
};

const PhotosList: React.FC<PhotosListProps> = ({ userId }) => {
  const photosUrls = useSelector(
    (state: RootState) => state.users[userId].photos
  );

  return (
    <>
      <StyledPhotosList>
        {photosUrls.map((url, index) => (
          <PhotoItem key={index} />
        ))}
      </StyledPhotosList>
    </>
  );
};

export default PhotosList;

const StyledPhotosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
