import styled from 'styled-components';

export const ContainerGrid = styled.main`
  
  width:100%;
  height:100%;
  display:grid;
  place-items:center;
`;

export const ContainerFlex = styled.div`

height:100vh;
width:900px;
border:1px solid red;
display: flex;
flex-direction: ${(props) => (props.column ? "column" : "row")};
justify-content: space-evenly;
`
