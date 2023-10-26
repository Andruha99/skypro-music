import React from "react";
import "../trackList/trackList.css";

export const FilterByGenre = () => {
  return (
    <div className="filter__menu">
      <ul className="filter__list">
        <li className="filter__item">Рок</li>
        <li className="filter__item">Хип-хоп</li>
        <li className="filter__item">Поп-музыка</li>
        <li className="filter__item">Техно</li>
        <li className="filter__item">Инди</li>
      </ul>
    </div>
  );
};
