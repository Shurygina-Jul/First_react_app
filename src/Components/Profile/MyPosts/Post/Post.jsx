import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295430_960_720.png" />
      {props.message}

      <div>
        <span>like {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
