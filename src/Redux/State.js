let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likes: 10 },
      { id: 2, message: "It's my first post", likes: 0 },
    ],
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
export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likes: 0,
  };
  state.profilePage.posts.push(newPost);
};
export default state;
