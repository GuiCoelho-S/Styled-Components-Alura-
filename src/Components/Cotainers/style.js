import styled from 'styled-components';

export const ContainerGrid = styled.main`
  
  width:100%;
  height:800px;
  display:grid;
  place-items:center;
  background-color: ${({theme}) => {return theme.container}}
`;

export const ContainerFlex = styled.div`

height:100%;
width:900px;
display: flex;
flex-direction: ${(props) => (props.column ? "column" : "row")};
justify-content: ${(props) => (props.justify_evenly ? "space-evenly" : "space-between")};
`

export const Container = styled.div`

width: 100%;
height:auto;
`