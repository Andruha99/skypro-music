import React from "react";
import * as S from "../trackList/styles";

export const FilterByGenre = () => {
  return (
    <S.FilterMenu className="filter__menu">
      <S.FilterList className="filter__list">
        <S.FilterItem className="filter__item">Рок</S.FilterItem>
        <S.FilterItem className="filter__item">Хип-хоп</S.FilterItem>
        <S.FilterItem className="filter__item">Поп-музыка</S.FilterItem>
        <S.FilterItem className="filter__item">Техно</S.FilterItem>
        <S.FilterItem className="filter__item">Инди</S.FilterItem>
      </S.FilterList>
    </S.FilterMenu>
  );
};
