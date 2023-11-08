import styled from "styled-components";

export const StyledLogInWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
`;

export const StyledLogInContainer = styled.div`
  padding: 47px 43px;
  background-color: #fff;
  color: #000;
  border-radius: 12px;
`;

export const StyledFormLogo = styled.img`
  display: block;
  margin: 0 auto;
  width: 140px;
  height: 21px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 42px;
  gap: 38px;
`;

export const StyledFormInput = styled.input`
  padding-bottom: 8px;
  width: 279px;
  color: #e1e1e1;
  border: none;
  border-bottom: 1px solid #d0cece;
  font-family: StratosSkyeng, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
`;

export const StyledFormButton = styled.button`
  padding: 13px 0;
  width: 100%;
  font-family: StratosSkyeng, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border-radius: 6px;
`;

export const StyledEnterButton = styled(StyledFormButton)`
  background-color: #580ea2;
  color: #fff;

  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`;

export const StyledRegisterButton = styled(StyledFormButton)`
  background-color: #fff;
  border: 1px solid #d0cece;

  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d0cece;
  }
`;
