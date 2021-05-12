import { actionType } from "../actions";
interface INavItem {
  id: number;
  body: string;
  url: string;
}

const navItems = [
  { id: 1, body: "Main", url: "/" },
  { id: 2, body: "Friends", url: "/friends" },
  { id: 3, body: "Messages", url: "/messages" },
  { id: 4, body: "Photos", url: "/photos/0" },
  { id: 5, body: "Videos", url: "/videos" },
];

export type NavItemsType = typeof navItems;

export const navReducer = (
  state = navItems,
  action: actionType
): NavItemsType => {
  switch (action.type) {
    default:
      return state;
  }
};
