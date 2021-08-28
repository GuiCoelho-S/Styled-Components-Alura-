import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    padding:0;
    margin:0;
    box-sizing:border-box;

}   

    body {
        background-color: ${({theme}) => {return theme.body}};
        
        p {
            color: ${({theme}) => {return theme.text}}
        }
    }
`;
