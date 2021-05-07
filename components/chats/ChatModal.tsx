import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/reducers";
import {
  addMessage,
  ChatStateType,
  closeChatModal,
} from "../../Redux/reducers/chatsReducer";
import styles from "../../styles/Messages.module.scss";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { useRef } from "react";

const sendMessageHandler = (inputEl, userId, chatBox, dispatch) => {
  if (inputEl.value) {
    dispatch(addMessage(userId, inputEl.value));
    inputEl.value = "";

    setTimeout(() => {
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 0);
  }
};

type ChatModalProps = {
  chats: ChatStateType;
};

const ChatModal: React.FC<ChatModalProps> = ({ chats }) => {
  const modal = useSelector((state: RootState) => state.chatModal);
  const dispatch = useDispatch();
  const chat = chats.find((elem) => elem.id === modal.id);
  const messages = chat.messages;
  const friend = useSelector((state: RootState) => state.users[modal.id]);
  const inputEl = useRef(null);
  const chatBox = useRef(null);
  return (
    <div>
      <Dialog open={modal.isOpen} onClose={() => dispatch(closeChatModal())}>
        <DialogContent>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing="0.5rem"
          >
            <Grid item>
              <Avatar src={friend.photoUrl || ""} />
            </Grid>
            <Grid item>
              <Typography>{friend.name}</Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogContent>
          <div ref={chatBox} className={styles.chatBox}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${
                  message.recieved && styles.recieved
                }`}
              >
                {message.body}
              </div>
            ))}
          </div>

          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Your message"
            type="text"
            fullWidth
            inputRef={inputEl}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                sendMessageHandler(
                  inputEl.current,
                  friend.id,
                  chatBox.current,
                  dispatch
                );
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(closeChatModal())} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() =>
              sendMessageHandler(
                inputEl.current,
                friend.id,
                chatBox.current,
                dispatch
              )
            }
            color="primary"
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ChatModal;
