import styled from "styled-components";

export const MiniFormStyle = styled.div`
  margin: 0 auto;
  width: 600px;
  height: 500px;
  background-color: ${({ theme }) => {
    return theme.form;
  }};
  border-radius: 20px;
  padding: 0 60px;
  border: 1px solid red;
  position: relative;
`;
