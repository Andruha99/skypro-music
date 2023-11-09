import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

export const MenuItem = (props) => {
  return (
    <S.MenuItem>
      <Link to={`${props.linkTo}`}>
        <S.MenuLink onClick={props.onClick}>{props.name}</S.MenuLink>
      </Link>
    </S.MenuItem>
  );
};
