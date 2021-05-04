import React, { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ChatList from "../components/chats/ChatList";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/reducers";
import ChatModal from "../components/chats/ChatModal";
import { addNewChat, openChatModal } from "../Redux/reducers/chatsReducer";

export interface MessagesProps {}
const Messages: React.FC<MessagesProps> = () => {
  const router = useRouter();
  const isModal = useSelector((state: RootState) => state.chatModal.isOpen);
  const chats = useSelector((state: RootState) => state.chats);
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query.id) {
      const idNum = Number(router.query.id);
      if (!chats.some((elem) => elem.id === idNum)) {
        dispatch(addNewChat(idNum));
      }

      dispatch(openChatModal(idNum));
    }
  }, []);

  return (
    <MainLayout title="Social-Media | Messages">
      <ChatList />
      {isModal && <ChatModal chats={chats} />}
    </MainLayout>
  );
};

export default Messages;
