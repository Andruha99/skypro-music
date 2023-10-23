import React from "react";
import "./sideBar.css";
import { SideBarItem } from "../sideBarItem/SideBarItem";

export const SideBar = () => {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SideBarItem
            linkTo="#"
            imgSrc="img/playlist01.png"
            imgAlt="day's playlist"
          />

          <SideBarItem
            linkTo="#"
            imgSrc="img/playlist02.png"
            imgAlt="day's playlist"
          />

          <SideBarItem
            linkTo="#"
            imgSrc="img/playlist03.png"
            imgAlt="day's playlist"
          />
        </div>
      </div>
    </div>
  );
};
