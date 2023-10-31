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
