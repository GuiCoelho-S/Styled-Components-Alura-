import React, { useState } from "react";
import GlobalStyle from "../Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "../UI/temas";
import { ThemeBtn } from "../UI/themeBtn";
import SwitchTheme from "../Components/SwitchTheme";
import { Descricao, Title } from "../UI/title";
import {
  ContainerGrid,
  ContainerFlex,
  Container,
} from "../Components/Cotainers/style";
import MiniForm from "../Components/MiniForm";

export function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };
  return (
    <ThemeProvider theme={theme ? darkMode : lightMode}>
      <GlobalStyle />
      <ThemeBtn onClick={toggleTheme}>
        <SwitchTheme theme={theme} />
      </ThemeBtn>
      <ContainerGrid>
        <ContainerFlex column justify_evenly>
          <Title>Miniformulario</Title>
          <Descricao>
            <p>
              Esse simples projeto, busca consolidar o conhecimento sobre o
              tráfego de dados entre componentes irmãos, sem o uso de useContext
              ou redux, além de praticar o uso de váriáveis em
              styled-components, junto com a validação das respostas enviadas
              pelo usuário
            </p>
          </Descricao>
          <Container>
            <MiniForm />
          </Container>
        </ContainerFlex>
      </ContainerGrid>
    </ThemeProvider>
  );
}

export default App;
