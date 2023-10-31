import styled from "styled-components";

export const StyledButton = styled.div`
  cursor: pointer;
`;

export const StyledBtnText = styled.div`
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }

  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }
`;

export const StyledBtnIcon = styled.div`
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }

  &:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }

  &:active {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`;

export const StyledTrackPlayLikeDislikeSvg = styled.svg`
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
`;
