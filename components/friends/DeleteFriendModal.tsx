import React, { Dispatch } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/reducers";
import {
  closeDeleteFriendModal,
  DeleteFriendModalActionTypes,
} from "../../Redux/reducers/friendsReducer";
import { actionType } from "../../Redux/actions";
import { deleteFriend } from "../../Redux/reducers/usersReducser";

const handleClose = (dispatch: Dispatch<DeleteFriendModalActionTypes>) => {
  dispatch(closeDeleteFriendModal());
};
const handleConfirm = (
  userId: number,
  friendId: number,
  dispatch: Dispatch<actionType>
) => {
  dispatch(deleteFriend(userId, friendId));
  dispatch(closeDeleteFriendModal());
};

export default function DeleteFriendModal() {
  const { id, isOpen } = useSelector(
    (state: RootState) => state.deleteFriendModal
  );
  const friend = useSelector((state: RootState) => state.users[id]);
  const dispatch = useDispatch();
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose.bind(null, dispatch)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are going to remove <strong>{friend && friend.name}</strong>{" "}
            from your friends list. He/she will be informed about that. Press
            Confirm button to proceed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose.bind(null, dispatch)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleConfirm.bind(null, 0, id, dispatch)}
            color="primary"
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
