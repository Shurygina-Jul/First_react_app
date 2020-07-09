import { rerenderEntierTree } from "../Render";

let state = {
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
};
window.state = state;

export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likes: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntierTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntierTree(state);
};
export default state;
