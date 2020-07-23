const ADD_POST = "ADD-POS";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you?",
      likes: 10,
    },
    {
      id: 2,
      message: "It's my first post",
      likes: 0,
    },
  ],
  newPostText: "Good!",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: state.newPostText,
        likes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReducer;
