import { findAllByAltText } from "@testing-library/react";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
let initialState = {
  users: [
    /*
    {
      id: 1,
      followed: false,
      fullname: "Alexander",
      status: "Hello every one",
      location: { city: "Omsk", country: "Russia" },
    },

    {
      id: 2,
      followed: true,
      fullname: "Julia",
      status: "Best day",
      location: { city: "Voronezh", country: "Russia" },
    },
    {
      id: 3,
      followed: false,
      fullname: "Varvara",
      status: "I am princess",
      location: { city: "Moscow", country: "Russia" },
    },
*/
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export default followAC = () => ({ type: FOLLOW, userId });
export default unfollowAC = () => ({ type: UNFOLLOW, userId });
export default setUserAC = () => ({ type: SET_USERS, users });
export default profileReducer;
