import { ThemeProvider } from 'styled-components';

import Sidebar from './containers/sidebar';
import About from './containers/about';
import EstiloGlobal, { Container } from './styles';
import Projects from './containers/projects';
import MouseFollower from './components/mouse';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';
import { useState } from 'react';

function App() {
  const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(true);

  function changeTheme() {
    setIsUsingDarkTheme(!isUsingDarkTheme);
  }

  return (
    <ThemeProvider theme={isUsingDarkTheme ? darkTheme : lightTheme}>
      <MouseFollower />
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
