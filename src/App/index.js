import React, { useState } from "react";
import  GlobalStyle  from "../Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "../UI/temas";
import { ThemeBtn } from "../UI/themeBtn";
import SwitchTheme from "../Components/SwitchTheme";
import { Title } from "../UI/title"
import {ContainerGrid, ContainerFlex} from "../Components/Cotainers/style"
export function App() {

  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme)
  }
  return (
    
      <ThemeProvider theme={theme ? darkMode : lightMode}>
        <GlobalStyle />
        <ThemeBtn onClick={toggleTheme}>
           <SwitchTheme theme= {theme} />
        </ThemeBtn>
        <ContainerGrid>
          <ContainerFlex column>
            <Title>Este é um texto</Title>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
          </ContainerFlex>

        </ContainerGrid>
        
        
      </ThemeProvider>
      
    
  );
}

export default App;
