import { useSelector } from "react-redux";
import { RootState } from "../../Redux/reducers";
import FriendItem from "./FriendItem";
import styles from "../../styles/Friends.module.scss";
import { List } from "@material-ui/core";

const FriendList: React.FC = () => {
  const friendsList = useSelector((state: RootState) => state.friends);

  return (
    <List className={styles.friendsList}>
      {friendsList.length === 0
        ? "No friends"
        : friendsList.map((friend) => (
            <FriendItem key={friend.id} friend={friend} />
          ))}
    </List>
  );
};

export default FriendList;
