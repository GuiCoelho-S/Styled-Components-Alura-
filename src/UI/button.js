import styled from "styled-components";

export const Button = styled.button`
  bottom: 20px;
  right: 30px;
  width: 100px;
  height: 40px;
  background-color: ${(props) => {
    return props.primary ? "#f10" : "white";
  }};
  color: ${(props) => {
    return props.primary ? "white" : "blue";
  }};
  padding: 2px;
  border-radius: 14px;
  outline: none;
  border: none;
  transition-property: scale;
  transition-duration: 0.4s;
  cursor: pointer;
  position: absolute;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => {
      return props.primary ? "black" : "blue";
    }};
    color: ${(props) => {
      return props.primary ? "white" : "white";
    }};
    scale: 1.2;
  }
`;
