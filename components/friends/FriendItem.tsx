import {
  friendType,
  openDeleteFriendModal,
} from "../../Redux/reducers/friendsReducer";
import styles from "../../styles/Friends.module.scss";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import Link from "next/link";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

export interface IFriendItemProps {
  friend: friendType;
}
const onDelete = (id: number, dispatch: Dispatch) => {
  dispatch(openDeleteFriendModal(id));
};

const FriendItem: React.FC<IFriendItemProps> = ({ friend }) => {
  const dispatch = useDispatch();
  return (
    <ListItem key={friend.id}>
      <ListItemAvatar className={styles.avatarWrapper}>
        <Avatar
          className={styles.avatar}
          alt={`Avatar `}
          src={friend.photoUrl || ""}
        />
      </ListItemAvatar>
      <ListItemText
        primary={friend.name}
        secondary={
          <span className={styles.secondaryWrapper}>
            <Link
              href={{
                pathname: "/messages",
                query: { id: friend.id },
              }}
            >
              <a className={styles.chatLink}>Chat</a>
            </Link>
            <span
              onClick={onDelete.bind(null, friend.id, dispatch)}
              className={styles.chatLink}
            >
              Delete friend
            </span>
          </span>
        }
      />
    </ListItem>
  );
};

export default FriendItem;
