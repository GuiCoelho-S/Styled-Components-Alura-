import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Form = styled.div`
  width: 100%;
  height: 100%;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  article {
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    p {
      color: black;
      padding-right: 20px;
      padding-bottom: 6px;
    }
  }

  label {
    font-family: "Montserrat", sans-serif;
  }
`;

export const Input = styled(TextField)`
  width: 100%;
`;

export const InputNumber = styled(TextField)`
  width: 20%;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Texto = styled.p`
  align-self: start;
  color: red;
`;
export const ContainerCheckBox = styled.aside`
  align-self: start;
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
