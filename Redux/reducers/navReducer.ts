import { actionType } from "../actions";
interface INavItem {
  id: number;
  body: string;
  url: string;
}

interface INavItems {
  [index: number]: INavItem;
}

const navItems: INavItems = [
  { id: 1, body: "Main", url: "/" },
  { id: 2, body: "Friends", url: "/friends" },
  { id: 3, body: "Music", url: "/music" },
  { id: 4, body: "Messages", url: "/messages" },
];

export const navReducer = (state = navItems, action: actionType): INavItems => {
  switch (action.type) {
    default:
      return state;
  }
};
