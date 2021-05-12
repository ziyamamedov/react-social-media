import { openDeleteFriendModal } from "../../Redux/reducers/friendsReducer";
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
import { UserType } from "../../Redux/reducers/usersReducser";

export interface IFriendItemProps {
  friend: UserType;
  friendsArray: Array<number>;
}
const onDelete = (id: number, dispatch: Dispatch) => {
  dispatch(openDeleteFriendModal(id));
};

const FriendItem: React.FC<IFriendItemProps> = ({ friend }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <ListItemAvatar className={styles.avatarWrapper}>
        <Avatar
          className={styles.avatar}
          alt={`Avatar `}
          src={friend.photoUrl || ""}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Link href={`/friend/${friend.id}`}>
            <a style={{ color: "cornflowerblue" }}>{friend.name}</a>
          </Link>
        }
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
