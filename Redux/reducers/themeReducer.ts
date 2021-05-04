import { actionType } from "../actions";

const initialThemeState = false;

export function themeReducer(state = initialThemeState, action: actionType) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return !state;
    default:
      return state;
  }
}
