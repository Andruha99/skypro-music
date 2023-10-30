import React, { useState } from "react";
import { MenuItem } from "../menuItem/MenuItem";
import * as S from "./styles";

export const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImg src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleMenu}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      <S.NavMenu>
        {menuOpen ? (
          <S.MenuList>
            <MenuItem linkTo="#" name="Главное" />
            <MenuItem linkTo="#" name="Мой плейлист" />
            <MenuItem linkTo="../signin.html" name="Войти" />
          </S.MenuList>
        ) : (
          ""
        )}
      </S.NavMenu>
    </S.MainNav>
  );
};
