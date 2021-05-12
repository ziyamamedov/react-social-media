export type UserType = {
  id: number;
  name: string;
  photoUrl?: string;
  photos?: Array<string>;
  friends: Array<number>;
};

//This is a list of all users on a website,
//normally this list should be taken froma database
const initialUsersList: UsersListType = {
  0: {
    id: 0,
    name: "Ziya",
    photoUrl: "../../images/avatars/ziya.jpg",
    friends: [1, 2, 3, 4],
    photos: [
      "../../images/photos/ziya-2.jpg",
      "../../images/photos/ziya-3.jpg",
      "../../images/photos/ziya-4.jpg",
      "../../images/photos/ziya-5.jpg",
    ],
  },
  1: {
    id: 1,
    name: "Andrey",
    photoUrl: "../../images/avatars/andrey.jpg",
    friends: [3, 0, 4, 7],
  },
  2: {
    id: 2,
    name: "Rovshan",
    photoUrl: "../../images/avatars/rovshan.jpg",
    friends: [3, 0, 4, 7],
  },
  3: { id: 3, name: "Rustam", friends: [2, 0, 4, 7] },
  4: {
    id: 4,
    name: "Oleg",
    photoUrl: "../../images/avatars/oleg.jpg",
    friends: [3, 0, 1, 7],
  },
  5: {
    id: 5,
    name: "Sharip",
    photoUrl: "../../images/avatars/sharip.jpg",
    friends: [],
  },
  6: {
    id: 6,
    name: "Katerina",
    photoUrl: "../../images/avatars/katerina.jpg",
    friends: [],
  },
  7: {
    id: 7,
    name: "Ildar",
    photoUrl: "../../images/avatars/ildar.jpg",
    friends: [3, 0, 4, 1],
  },
  8: {
    id: 8,
    name: "Janna",
    photoUrl: "../../images/avatars/janna.jpg",
    friends: [],
  },
};

export type UsersListType = {
  [key: number]: UserType;
};

export const usersReducer = (
  state = initialUsersList,
  { type, payload }: UsersActionTypes
): UsersListType => {
  switch (type) {
    case DELETE_FRIEND:
      let user = state[payload.userId];
      let friend = state[payload.friendId];
      let newUserFriends = user.friends.filter(
        (friend) => friend !== payload.friendId
      ); //delete friend from a users friends
      let newFriendFriends = friend.friends.filter(
        (friend) => friend !== payload.userId
      ); //delete user from frinds friends
      let newUser = { ...user, friends: newUserFriends };
      let newFriend = { ...friend, friends: newFriendFriends };
      return {
        ...state,
        [payload.userId]: newUser,
        [payload.friendId]: newFriend,
      };
    default:
      return state;
  }
};

//Combined actions types
type UsersActionTypes = DeleteFriendType;
//Action-type names
const DELETE_FRIEND = "DELETE_FRIEND";

//Actions types
type DeleteFriendType = {
  type: typeof DELETE_FRIEND;
  payload: {
    userId: number;
    friendId: number;
  };
};
//Action-creators
export const deleteFriend = (
  userId: number,
  friendId: number
): DeleteFriendType => {
  return { type: DELETE_FRIEND, payload: { userId, friendId } };
};
