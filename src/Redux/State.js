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
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likes: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subcribe(observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;
export default store;
