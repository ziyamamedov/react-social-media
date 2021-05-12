import { useRouter } from "next/dist/client/router";
import DeleteFriendModal from "../../../components/friends/DeleteFriendModal";
import FriendList from "../../../components/friends/FriendsList";
import MainLayout from "../../../components/layouts/MainLayout";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/reducers";

const FriendFriends: React.FC = () => {
  const router = useRouter();
  const userId = Number(router.query.id);
  const userName = useSelector((state: RootState) => state.users[userId].name);

  return (
    <MainLayout title="Social-Media | Friends">
      <FriendsTitle>{`${userName}'s friends`}</FriendsTitle>
      <FriendList userId={userId} />
      <DeleteFriendModal />
    </MainLayout>
  );
};

export default FriendFriends;

const FriendsTitle = styled.h1``;
