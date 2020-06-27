import React from "react";
import s from "./Profile.module.css";
const Profile = () => {
  return (
    <div>
      <div className={s.content}>
        <div>
          <img src="https://pbs.twimg.com/profile_banners/912245600997007360/1533995921/1500x500" />
        </div>
        <div>avatar+discription</div>
        <div>
          My Posts
          <div>New Post</div>
          <div className={s.posts}>
            <div className={s.item}>Post1</div>
            <div className={s.item}>Post2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
