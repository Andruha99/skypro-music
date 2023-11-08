import React from "react";
import { SideBarItem } from "../sideBarItem/SideBarItem";
import * as S from "./styles";

export const SideBar = (props) => {
  return (
    <S.MainSidebar>
      <S.SideBarPersonal>
        <S.SideBarPersonalName>Sergey.Ivanov</S.SideBarPersonalName>
        <S.SideBarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SideBarIcon>
      </S.SideBarPersonal>
      <S.SideBarBlock>
        <S.SideBarList className="sidebar__list">
          {props.categories.map((category) => {
            return (
              <SideBarItem
                linkTo={`${category.id}`}
                imgSrc={`img/playlist0${category.id}.png`}
                imgAlt={`${category.nameCategory}`}
                isLoading={props.isLoading}
              />
            );
          })}
          {/* <SideBarItem
            linkTo="#"
            imgSrc="img/playlist01.png"
            imgAlt="day's playlist"
            isLoading={props.isLoading}
          />

          <SideBarItem
            linkTo="#"
            imgSrc="img/playlist02.png"
            imgAlt="day's playlist"
            isLoading={props.isLoading}
          />

          <SideBarItem
            linkTo="#"
            imgSrc="img/playlist03.png"
            imgAlt="day's playlist"
            isLoading={props.isLoading}
          /> */}
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MainSidebar>
  );
};
