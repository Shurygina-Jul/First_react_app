import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div className={s.content}>
        <img src="https://pbs.twimg.com/profile_banners/912245600997007360/1533995921/1500x500" />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status={"Hello every one!"} />
      </div>
    </div>
  );
};
export default ProfileInfo;
