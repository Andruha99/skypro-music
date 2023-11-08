import React from "react";
import { SideBarImg, StyledSideBarItem, StyledSideBarLink } from "./styles";
import { StyledSkeleton } from "../skeleton/styles";
import { Link } from "react-router-dom";

export const SideBarItem = (props) => {
  return (
    <StyledSideBarItem>
      {props.isLoading ? (
        <StyledSkeleton />
      ) : (
        <Link to={`/category/${props.linkTo}`}>
          <SideBarImg
            className="sidebar__img"
            src={props.imgSrc}
            alt={props.imgAlt}
          />
        </Link>
      )}
    </StyledSideBarItem>
  );
};
