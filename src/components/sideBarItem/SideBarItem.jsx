import React from "react";
import "../../App.css";
import { SideBarImg, StyledSideBarItem, StyledSideBarLink } from "./styles";

export const SideBarItem = (props) => {
  return (
    <StyledSideBarItem>
      {props.isLoading ? (
        <div className="skeleton"></div>
      ) : (
        <StyledSideBarLink href={props.linkTo}>
          <SideBarImg
            className="sidebar__img"
            src={props.imgSrc}
            alt={props.imgAlt}
          />
        </StyledSideBarLink>
      )}
    </StyledSideBarItem>
  );
};
