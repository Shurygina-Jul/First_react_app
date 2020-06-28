import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <div>
      <div className={s.content}>
        <div>
          <img src="https://pbs.twimg.com/profile_banners/912245600997007360/1533995921/1500x500" />
        </div>
        <div>avatar+discription</div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
