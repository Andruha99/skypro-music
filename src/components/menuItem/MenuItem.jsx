import React from "react";
import "./menuItem.css";

export const MenuItem = (props) => {
  return (
    <li className="menu__item">
      <a href={props.linkTo} className="menu__link">
        {props.name}
      </a>
    </li>
  );
};
