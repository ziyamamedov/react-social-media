const delFrInitState = { id: null, isOpen: false };

export type DeleteFriendModalState = typeof delFrInitState;

export function deleteFriendModalReducer(
  state = delFrInitState,
  action: DeleteFriendModalActionTypes
): DeleteFriendModalState {
  switch (action.type) {
    case OPEN_DELETE_FRIEND_MODAL:
      return { id: action.payload, isOpen: true };
    case CLOSE_DELETE_FRIEND_MODAL:
      return { id: null, isOpen: false };
    default:
      return state;
  }
}

//Delete Friend modal action names
const OPEN_DELETE_FRIEND_MODAL = "OPEN_DELETE_FRIEND_MODAL";
const CLOSE_DELETE_FRIEND_MODAL = "CLOSE_DELETE_FRIEND_MODAL";
// const DELETE_FRIEND = "DELETE_FRIEND";

//Delete friend-modal action types
export type DeleteFriendModalActionTypes =
  | OpenDelFriendModalActionType
  | CloseDelFriendModalActionType;

type OpenDelFriendModalActionType = {
  type: typeof OPEN_DELETE_FRIEND_MODAL;
  payload: number;
};
type CloseDelFriendModalActionType = {
  type: typeof CLOSE_DELETE_FRIEND_MODAL;
};

///Delete friend Modal action-creators
export const openDeleteFriendModal = (
  id: number
): OpenDelFriendModalActionType => {
  return { type: OPEN_DELETE_FRIEND_MODAL, payload: id };
};
export const closeDeleteFriendModal = (): CloseDelFriendModalActionType => {
  return { type: CLOSE_DELETE_FRIEND_MODAL };
};
