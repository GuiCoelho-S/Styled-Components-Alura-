import styled from 'styled-components';

export const Icon = styled.img`
  
  width:50px;
  height: 50px;
  filter: ${({theme}) => {return theme.filter}}
`;
