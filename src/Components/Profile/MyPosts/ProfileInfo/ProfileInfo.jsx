import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import { updateStatus } from "./../../../../Redux/profile-reducer";
import ProfileStatusWithHooks from "./ProfileStatusWithHoocs";
import userPhoto from "../../../../asses/images/avatar.jpg";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      {/* <div className={s.content}>
        <img src="https://pbs.twimg.com/profile_banners/912245600997007360/1533995921/1500x500" />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};
export default ProfileInfo;
