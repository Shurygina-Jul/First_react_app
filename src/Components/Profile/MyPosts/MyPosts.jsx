import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
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
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.postBlock}>New Post</div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
