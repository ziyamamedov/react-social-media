import styled from "styled-components";
import MainLayout from "../components/layouts/MainLayout";

export interface MusicProps {}

const Music: React.FC<MusicProps> = () => {
  return (
    <MainLayout title="Social-Media | Music">
      <Title>Music</Title>
    </MainLayout>
  );
};

export default Music;

const Title = styled.h1`
  color: blue;
`;
