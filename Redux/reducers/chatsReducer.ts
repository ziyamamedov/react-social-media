import { actionType } from "../actions";

export type messageType = {
  id: number;
  body: string;
  time?: number;
  recieved: boolean;
};

export type chatType = {
  id: number;
  messages: Array<messageType>;
};

const initialChatsState: Array<chatType> = [
  {
    id: 3,
    messages: [
      { id: 1, body: "Hello", recieved: true },
      { id: 2, body: "Hi", recieved: false },
      { id: 3, body: "How are you?", recieved: true },
      { id: 4, body: "I'm fine thanks, and you?", recieved: false },
      { id: 5, body: "I'm good", recieved: true },
    ],
  },
  {
    id: 1,
    messages: [
      { id: 1, body: "Hi", recieved: false },
      { id: 2, body: "Where are you?", recieved: false },
      { id: 3, body: "Hi, I'm home, wats up?", recieved: true },
      { id: 4, body: "I need yuor help", recieved: false },
      { id: 5, body: "to load the boxes", recieved: false },
      { id: 6, body: "Today at 2 pm", recieved: false },
      { id: 7, body: "Sure, no problem", recieved: true },
    ],
  },
  {
    id: 4,
    messages: [
      { id: 1, body: "Wassup man?", recieved: true },
      { id: 2, body: "Fine!", recieved: false },
      { id: 3, body: "We are going to the party, are you in?", recieved: true },
      { id: 4, body: "Of course!", recieved: false },
    ],
  },
];

export type ChatStateType = typeof initialChatsState;

export function chatsReducer(
  state = initialChatsState,
  action: ChatsReducerActionTypes
): ChatStateType {
  switch (action.type) {
    case ADD_MESSAGE:
      const newState = [];
      state.forEach((item) => {
        if (item.id === action.payload.userId) {
          let newMessages = [...item.messages];
          let newMessage = {
            id: newMessages.length + 2,
            body: action.payload.messageBody,
            recieved: false,
          };
          newMessages.push(newMessage);
          newState.push({ ...item, messages: newMessages });
        } else {
          newState.push(item);
        }
      });
      return newState;
    case ADD_NEW_CHAT:
      return [...state, { id: action.payload, messages: [] }];
    default:
      return state;
  }
}

export function chatModalReducer(
  state = { isOpen: false, id: null },
  action: ModalReducerActionType
) {
  switch (action.type) {
    case "OPEN_CHAT_MODAL":
      return { isOpen: true, id: action.payload };
    case "CLOSE_CHAT_MODAL":
      return { isOpen: false, id: null };
    default:
      return state;
  }
}

//Modal action-creators
export const openChatModal = (id: number): OpenChatModalActionType => {
  return { type: OPEN_CHAT_MODAL, payload: id };
};
export const closeChatModal = (): CloseChatModalActionType => {
  return { type: CLOSE_CHAT_MODAL };
};

//Chats action-creators
export const addMessage = (
  userId: number,
  messageBody: string
): AddMessageActionType => {
  return { type: ADD_MESSAGE, payload: { userId, messageBody } };
};

export const addNewChat = (id: number): AddNewChatActionType => {
  return { type: ADD_NEW_CHAT, payload: id };
};

const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_NEW_CHAT = "ADD_NEW_CHAT";
const CLOSE_CHAT_MODAL = "CLOSE_CHAT_MODAL";
const OPEN_CHAT_MODAL = "OPEN_CHAT_MODAL";

///Types for reducers
type ChatsReducerActionTypes = AddMessageActionType | AddNewChatActionType;
type ModalReducerActionType =
  | OpenChatModalActionType
  | CloseChatModalActionType;

/// Types for actions
type AddMessageActionType = {
  type: typeof ADD_MESSAGE;
  payload: {
    userId: number;
    messageBody: string;
  };
};
type AddNewChatActionType = {
  type: typeof ADD_NEW_CHAT;
  payload: number;
};
type CloseChatModalActionType = {
  type: typeof CLOSE_CHAT_MODAL;
};
type OpenChatModalActionType = {
  type: typeof OPEN_CHAT_MODAL;
  payload: number;
};
