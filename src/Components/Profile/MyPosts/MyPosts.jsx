import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>
      <div>My Posts</div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>New Post</div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likes="10" />
        <Post message="It's my first post" likes="0" />
      </div>
    </div>
  );
};

export default MyPosts;
