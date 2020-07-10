import React from "react";
import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div className={s.content}>
        <div>
          <img src="https://pbs.twimg.com/profile_banners/912245600997007360/1533995921/1500x500" />
        </div>
        <div className={s.info}>
          <div className={s.avatar}>
            <img src="https://images.unsplash.com/photo-1581311997546-c0134de32b44?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM3NTU1fQ"></img>
          </div>
          <div className={s.description}>
            <h3>Vanessa Bree</h3>
            <div className={s.status}>Status: Hi, every body!!!!</div>
            <div className={s.personal}>
              <div>Personal</div>
              <div>
                <img src="https://img2.freepng.ru/20180517/xgq/kisspng-computer-icons-calendar-learning-5afdab70e134c2.7059822515265739369225.jpg" />
                Birthday: 01/01/2000
              </div>
              <div>
                <img src="https://img2.freepng.ru/20180421/ppe/kisspng-house-home-automation-kits-computer-icons-free-home-5adba218cb5ea7.832629231524343320833.jpg" />
                Location: Voronezh
              </div>
              <div>
                <img src="https://img2.freepng.ru/20180715/fo/kisspng-study-skills-education-learning-computer-icons-sc-logo-5b4b5b88a2fd71.8923331115316652886676.jpg" />
                Education: Voronezh State University
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
