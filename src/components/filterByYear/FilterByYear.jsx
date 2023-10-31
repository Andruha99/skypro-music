import React from "react";
import * as S from "../trackList/styles";

export const FilterByYear = () => {
  return (
    <S.FilterMenu className="filter__menu">
      <S.FilterList className="filter__list">
        <S.FilterItem className="filter__item">По умолчанию</S.FilterItem>
        <S.FilterItem className="filter__item">Сначала новые</S.FilterItem>
        <S.FilterItem className="filter__item">Сначала старые</S.FilterItem>
      </S.FilterList>
    </S.FilterMenu>
  );
};
