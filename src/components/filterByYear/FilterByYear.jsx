import React from "react";
import "../trackList/trackList.css";

export const FilterByYear = () => {
  return (
    <div className="filter__menu">
      <ul className="filter__list">
        <li className="filter__item">По умолчанию</li>
        <li className="filter__item">Сначала новые</li>
        <li className="filter__item">Сначала старые</li>
      </ul>
    </div>
  );
};
