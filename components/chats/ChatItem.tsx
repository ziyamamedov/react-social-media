import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { openChatModal } from "../../Redux/reducers/chatsReducer";
import { RootState } from "../../Redux/reducers";
import { chatType } from "../../Redux/reducers/chatsReducer";
import styled from "styled-components";

export interface MessageitemProps {
  chat: chatType;
}

const ChatItem: React.FC<MessageitemProps> = ({ chat }) => {
  const person = useSelector((state: RootState) => state.users[chat.id]);
  const dispatch = useDispatch();
  const lastMessage = chat.messages[chat.messages.length - 1]
    ? chat.messages[chat.messages.length - 1].body
    : "";

  return (
    <>
      <ListItem
        button
        onClick={() => {
          dispatch(openChatModal(person.id));
        }}
      >
        <ListItemAvatar>
          <Avatar src={person.photoUrl || ""} />
        </ListItemAvatar>
        <ListItemText
          primary={person.name}
          secondary={<SecondaryText>{lastMessage}</SecondaryText>}
        />
      </ListItem>
    </>
  );
};
export default ChatItem;

const SecondaryText = styled.span`
  color: #9d9d9d;
`;
