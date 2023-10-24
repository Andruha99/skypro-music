import React from "react";
import "./sideBarItem.css";
import "../../App.css";

export const SideBarItem = (props) => {
  return (
    <div className="sidebar__item">
      {props.isLoading ? (
        <div className="skeleton"></div>
      ) : (
        <a className="sidebar__link" href={props.linkTo}>
          <img className="sidebar__img" src={props.imgSrc} alt={props.imgAlt} />
        </a>
      )}
    </div>
  );
};
