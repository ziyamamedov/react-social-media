import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MainLayout from "../../components/layouts/MainLayout";
import { RootState } from "../../Redux/reducers";
import PhotosList from "../../components/photos/PhotosList";

export interface PhotosProps {}

const Photos: React.FC<PhotosProps> = () => {
  const router = useRouter();
  const userId = Number(router.query.userId);
  const userName = useSelector((state: RootState) => state.users[userId].name);
  return (
    <MainLayout title="Social-Media | Photos">
      <h1>{`${userId === 0 ? "My" : userName + "'s"} Photos`}</h1>
      <PhotosList userId={userId} />
    </MainLayout>
  );
};

export default Photos;
