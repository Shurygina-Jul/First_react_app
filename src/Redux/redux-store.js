import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reduser";
import usersReduser from "./users-reduser";
import authReducer from "./auth-reduser";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReduser,
  auth: authReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;
