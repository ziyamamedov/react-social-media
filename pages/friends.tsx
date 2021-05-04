import DeleteFriendModal from "../components/friends/DeleteFriendModal";
import FriendList from "../components/friends/FriendsList";
import MainLayout from "../components/layouts/MainLayout";

export interface FriendsProps {}
const Friends: React.FC<FriendsProps> = () => {
  return (
    <MainLayout title="Social-Media | Friends">
      <FriendList />
      <DeleteFriendModal />
    </MainLayout>
  );
};

export default Friends;
