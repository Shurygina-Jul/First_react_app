import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import { updateStatus } from "./../../../../Redux/profile-reducer";
import ProfileStatusWithHooks from "./ProfileStatusWithHoocs";

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
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};
export default ProfileInfo;

// const ProfileInfo = (props) => {
//   if (!props.profile) {
//     return <Preloader />;
//   }
//   return (
//     <div>
//       {/*  <div>
//               <img
//                   src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
//           </div>*/}
//       <div className={s.descriptionBlock}>
//         <img src={props.profile.photos.large} />
//         <ProfileStatus
//           status={props.status}
//           updateStatus={props.updateStatus}
//         />
//       </div>
//     </div>
//   );
// };
// export default ProfileInfo;
