import React from "react";
import "../../App.css";
import { SideBarImg, StyledSideBarItem, StyledSideBarLink } from "./styles";
import { StyledSkeleton } from "../skeleton/styles";

export const SideBarItem = (props) => {
  return (
    <StyledSideBarItem>
      {props.isLoading ? (
        <StyledSkeleton />
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
