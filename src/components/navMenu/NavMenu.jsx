import React from "react";
import "./navMenu.css";
import { MenuItem } from "../menuItem/MenuItem";

export const NavMenu = () => {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
          <MenuItem linkTo="#" name="Главное" />
          <MenuItem linkTo="#" name="Мой плейлист" />
          <MenuItem linkTo="../signin.html" name="Войти" />
        </ul>
      </div>
    </nav>
  );
};
