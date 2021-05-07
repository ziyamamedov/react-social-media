import { useSelector } from "react-redux";
import { RootState } from "../../Redux/reducers";
import FriendItem from "./FriendItem";
import styles from "../../styles/Friends.module.scss";
import { List } from "@material-ui/core";

const FriendList: React.FC = () => {
  const friendsArray = useSelector(
    (state: RootState) => state.users[0].friends
  );
  const friendsList = useSelector((state: RootState) => {
    return friendsArray.map((friend) => state.users[friend]);
  });
  return (
    <List className={styles.friendsList}>
      {friendsList.length === 0
        ? "No friends"
        : friendsList.map((friend) => (
            <FriendItem
              key={friend.id}
              friend={friend}
              friendsArray={friendsArray}
            />
          ))}
    </List>
  );
};

export default FriendList;
