import styled from "styled-components";

export const MostrarDado = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Nome = styled.header`
  align-self: center;
  font-size: 28px;
  color: blue;
`;

export const Profissao = styled.p`
  width: 200px;
  color: black;
  text-align: center;
`;

export const Language = styled.article`
  display: flex;
  width: 360px;
  height: auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-space-evenly;
`;
export const SemExperiencia = styled.p`
  width: 300px;
`;
