import { List } from "@material-ui/core";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/reducers";
import ChatItem from "./ChatItem";

export interface MessageListProps {}

const MessageList: React.FC<MessageListProps> = () => {
  const messagesList = useSelector((state: RootState) => state.chats);

  return (
    <>
      <List>
        {messagesList.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </List>
    </>
  );
};

export default MessageList;
