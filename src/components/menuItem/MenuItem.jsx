import React from "react";
import * as S from "./styles";

export const MenuItem = (props) => {
  return (
    <S.MenuItem>
      <S.MenuLink href={props.linkTo}>{props.name}</S.MenuLink>
    </S.MenuItem>
  );
};
