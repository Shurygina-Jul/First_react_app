import React from "react";
import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div className={s.content}>
        <div>
          <img src="https://pbs.twimg.com/profile_banners/912245600997007360/1533995921/1500x500" />
        </div>
        <div className={s.description}>avatar+discription</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
