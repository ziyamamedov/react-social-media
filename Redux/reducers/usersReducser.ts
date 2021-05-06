export type UserType = {
  id: number;
  name: string;
  photoUrl?: string;
};

//This is a list of all users on a website,
//normally this list should be taken froma database
const initialUsersList: Array<UserType> = [
  { id: 1, name: "Andrey", photoUrl: "../../images/avatars/andrey.jpg" },
  { id: 2, name: "Rovshan", photoUrl: "../../images/avatars/rovshan.jpg" },
  { id: 3, name: "Rustam" },
  { id: 4, name: "Oleg", photoUrl: "../../images/avatars/oleg.jpg" },
  { id: 5, name: "Sharip", photoUrl: "../../images/avatars/sharip.jpg" },
  { id: 6, name: "Katerina", photoUrl: "../../images/avatars/katerina.jpg" },
  { id: 7, name: "Ildar", photoUrl: "../../images/avatars/ildar.jpg" },
  { id: 8, name: "Janna", photoUrl: "../../images/avatars/janna.jpg" },
];

export type UsersList = typeof initialUsersList;
