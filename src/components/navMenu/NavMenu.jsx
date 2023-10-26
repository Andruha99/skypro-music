import React, { useState } from "react";
import "./navMenu.css";
import { MenuItem } from "../menuItem/MenuItem";

export const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={toggleMenu}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className="nav__menu menu">
        {menuOpen ? (
          <ul className="menu__list">
            <MenuItem linkTo="#" name="Главное" />
            <MenuItem linkTo="#" name="Мой плейлист" />
            <MenuItem linkTo="../signin.html" name="Войти" />
          </ul>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};
