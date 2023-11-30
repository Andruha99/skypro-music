import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
`;

export const ModalForm = styled.div`
  --modal-width: 366px;
  --modal-height: 439px;

  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 43px 47px 47px 40px;
`;
export const ModalLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 34px;
  background-color: transparent;
`;

export const ModalLogoImage = styled.img`
  width: 140px;
  height: 21px;
`;

export const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #d0cece;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 278px;
  height: 52px;
  border-radius: 6px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  &:disabled {
    background-color: #303030;
  }
`;

export const PrimaryButton = styled(Button)`
  color: #ffffff;
  background-color: #580ea2;
  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`;
export const SecondaryButton = styled(Button)`
  color: #000000;
  background-color: transparent;
  border: 1px solid #d0cece;

  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d9d9d9;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  width: 100%;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
`;

// import { Link } from "react-router-dom";
// import styled from "styled-components";

// export const LogInWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.85);
// `;

// export const LogInContainer = styled.div`
//   padding: 47px 43px;
//   background-color: #fff;
//   color: #000;
//   border-radius: 12px;
// `;

// export const FormLogo = styled.img`
//   display: block;
//   margin: 0 auto;
//   width: 140px;
//   height: 21px;
// `;

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-top: 42px;
//   gap: 38px;
// `;

// export const FormInput = styled.input`
//   padding-bottom: 8px;
//   width: 279px;
//   color: #e1e1e1;
//   border: none;
//   border-bottom: 1px solid #d0cece;
//   font-family: inherit;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: inherit;
//   line-height: 24px;
// `;

// export const ButtonsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   margin-top: 60px;
// `;

// export const FormButton = styled(Link)`
//   padding: 13px 0;
//   width: 100%;
//   font-family: inherit;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 24px;
//   border-radius: 6px;
//   text-align: center;
// `;

// export const EnterButton = styled(FormButton)`
//   background-color: #580ea2;
//   color: #fff;

//   &:hover {
//     background-color: #3f007d;
//   }

//   &:active {
//     background-color: #271a58;
//   }
// `;

// export const RegisterButton = styled(FormButton)`
//   background-color: #fff;
//   color: #000;
//   border: 1px solid #d0cece;

//   &:hover {
//     background-color: #f4f5f6;
//   }

//   &:active {
//     background-color: #d0cece;
//   }
// `;
