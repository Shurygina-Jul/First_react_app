import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi, how are you?", likes: 10 },
    { id: 2, message: "It's my first post", likes: 0 },
  ];
  return (
    <div className={s.postBlock}>
      <div>
        <h3>My Posts</h3>
      </div>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.postBlock}>New Post</div>
      <div className={s.posts}>
        <Post message={postsData[0].message} likes={postsData[0].likes} />
        <Post message={postsData[1].message} likes={postsData[1].likes} />
      </div>
    </div>
  );
};

export default MyPosts;
