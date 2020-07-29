import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://png-images.ru/wp-content/uploads/2015/02/02/3343/png/green_leaves_PNG3619.png" />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
