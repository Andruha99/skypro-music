import React, { useState } from "react";
import { MenuItem } from "../menuItem/MenuItem";
import * as S from "./styles";
import { Link } from "react-router-dom";

export const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <S.MainNav>
      <S.NavLogo>
        <Link to="/">
          <S.LogoImg src="img/logo.png" alt="logo" />
        </Link>
      </S.NavLogo>
      <S.NavBurger onClick={toggleMenu}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      <S.NavMenu>
        {menuOpen ? (
          <S.MenuList>
            <MenuItem linkTo="/" name="Главное" />
            <MenuItem linkTo="/favorites" name="Мой плейлист" />
            <MenuItem linkTo="/login" name="Войти" />
          </S.MenuList>
        ) : (
          ""
        )}
      </S.NavMenu>
    </S.MainNav>
  );
};
