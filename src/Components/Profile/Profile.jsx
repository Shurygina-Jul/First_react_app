import React from "react";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { updateStatus } from "./../../Redux/profile-reducer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
