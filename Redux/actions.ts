import { messageType } from "./reducers/chatsReducer";

export type actionType = {
  type: string;
  payload?: any;
};
//Theme action
export const toggleTheme = (): actionType => {
  return { type: "TOGGLE_THEME" };
};
