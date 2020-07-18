import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reduser";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likes: 10 },
        { id: 2, message: "It's my first post", likes: 0 },
      ],
      newPostText: "Good!",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "How are you?" },
        { id: 4, message: "What's up?" },
        { id: 5, message: "I'm ok!" },
      ],
      dialogs: [
        { id: 1, name: "Eva" },
        { id: 2, name: "Mike" },
        { id: 3, name: "Gordon" },
        { id: 4, name: "Luk" },
        { id: 5, name: "Julia" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },

  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subcribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;
