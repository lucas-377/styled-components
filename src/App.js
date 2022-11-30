import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from './Components/UI/temas';

import Cabecalho from './Components/Cabecalho';
import Container from './Components/Container';
import { GlobalStyle } from './Components/GlobalStyle';
import { ThemeToggler } from './Components/UI';
import SwitcherTheme from './Components/SwitcherTheme';

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  return (
    <ThemeProvider theme={theme ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <ThemeToggler onClick={toggleTheme}>
        <SwitcherTheme tema={theme} />
      </ThemeToggler>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
