import React from "react";
import { SideBarItem } from "../sideBarItem/SideBarItem";
import * as S from "./styles";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export const SideBar = (props) => {
  const { currentUser, setIsAllow } = useAuthContext();

  const handleLogOut = () => {
    localStorage.clear();
    setIsAllow(false);
  };

  return (
    <S.MainSidebar>
      <S.SideBarPersonal>
        <S.SideBarPersonalName>{currentUser.username}</S.SideBarPersonalName>
        <Link to={"/login"}>
          <S.SideBarIcon onClick={handleLogOut}>
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout"></use>
            </svg>
          </S.SideBarIcon>
        </Link>
      </S.SideBarPersonal>
      <S.SideBarBlock>
        <S.SideBarList className="sidebar__list">
          {props.categories.map((category) => {
            return (
              <SideBarItem
                key={category.id}
                linkTo={`${category.id}`}
                imgSrc={`img/playlist0${category.id}.png`}
                imgAlt={`${category.nameCategory}`}
                isLoading={props.isLoading}
              />
            );
          })}
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MainSidebar>
  );
};
