import React from "react";
import * as S from "../trackList/styles";

export const FilterByAuthor = () => {
  return (
    <S.FilterMenu className="filter__menu">
      <S.FilterList className="filter__list">
        <S.FilterItem className="filter__item">Nero</S.FilterItem>
        <S.FilterItem className="filter__item">
          Dynoro, Outwork, Mr. Gee
        </S.FilterItem>
        <S.FilterItem className="filter__item">Ali Bakgor</S.FilterItem>
        <S.FilterItem className="filter__item">
          Стоункат, Psychopath
        </S.FilterItem>
        <S.FilterItem className="filter__item">
          Jaded, Will Clarke, AR/CO
        </S.FilterItem>
        <S.FilterItem className="filter__item">
          Blue Foundation, Zeds Dead
        </S.FilterItem>
        <S.FilterItem className="filter__item">
          HYBIT, Mr. Black, Offer Nissim, Hi Profile
        </S.FilterItem>
        <S.FilterItem className="filter__item">minthaze</S.FilterItem>
      </S.FilterList>
    </S.FilterMenu>
  );
};
