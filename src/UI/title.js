import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => {
    return theme.title;
  }};
  align-self: center;
`;

export const Descricao = styled.article`
  width: 60%;
  align-self: center;
  border: 1px red dashed;
  padding: 10px 20px;

  p {
    text-align: justify;
  }
`;
