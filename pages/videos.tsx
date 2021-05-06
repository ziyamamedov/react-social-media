import styled from "styled-components";
import MainLayout from "../components/layouts/MainLayout";

export interface MusicProps {}

const Music: React.FC<MusicProps> = () => {
  return (
    <MainLayout title="Social-Media | Music">
      <h1>Videos</h1>
    </MainLayout>
  );
};

export default Music;
