import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { deleteFriendModalReducer } from "./friendsReducer";
import { chatModalReducer, chatsReducer } from "./chatsReducer";
import { navReducer } from "./navReducer";
import { themeReducer } from "./themeReducer";
import { usersReducer } from "./usersReducser";

const rootReducer = combineReducers({
  nav: navReducer,
  users: usersReducer,
  theme: themeReducer,
  chats: chatsReducer,
  chatModal: chatModalReducer,
  deleteFriendModal: deleteFriendModalReducer,
});

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
