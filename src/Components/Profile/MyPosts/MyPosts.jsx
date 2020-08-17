import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "./../../Common/FormsControls/FormsControls";
import {
  required,
  maxLengthCreator,
} from "../../../Utils/Validators/vaidators";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          placeholder={"Post message"}
          validate={[required, maxLength10]}
        />
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

const MyPosts = React.memo((props) => {
  let postsElements = [...props.posts]
    .reverse()
    .map((p) => <Post key={p.id} message={p.message} likes={p.likes} />);

  // let postsElements = props.posts.map((p) => (
  //   <Post message={p.message} likes={p.likes} />
  // ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
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
});
export default MyPosts;
