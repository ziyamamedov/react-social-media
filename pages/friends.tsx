import DeleteFriendModal from "../components/friends/DeleteFriendModal";
import FriendList from "../components/friends/FriendsList";
import MainLayout from "../components/layouts/MainLayout";
import styled from "styled-components";

export interface FriendsProps {}
const Friends: React.FC<FriendsProps> = () => {
  return (
    <MainLayout title="Social-Media | Friends">
      <FriendsTitle>My friends</FriendsTitle>
      <FriendList userId={0} />
      <DeleteFriendModal />
    </MainLayout>
  );
};

export default Friends;

const FriendsTitle = styled.h1``;
