import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component="textarea" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
    //props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    //let action={type:'UPDATE-NEW-POST-TEXT', newText: text};
    //let action = updateNewPostActionCreator(text);
    //props.dispatch(action);
  };
  return (
    <div className={s.postBlock}>
      <div>
        <h3>My Posts</h3>
      </div>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.postBlock}>New Post</div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
