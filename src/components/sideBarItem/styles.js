import styled from "styled-components";

export const StyledSideBarItem = styled.div`
  width: 250px;
  height: 150px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const StyledSideBarLink = styled.a`
  width: 100%;
  height: 100%;
`;

export const SideBarImg = styled.img`
  width: 100%;
  height: auto;
`;
