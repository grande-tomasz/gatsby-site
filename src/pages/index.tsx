import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import DarkModeSwitch from '../components/dark-mode-switch/dark-mode-switch';
import {
  darkBackgroundColor,
  darkTextColor,
  lightBackgroundColor,
  lightTextColor,
} from '../constants/colors';

interface IGlobalStyleProps {
  darkMode: boolean;
}

const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`
  body {
    background-color: ${(props) => (props.darkMode ? darkBackgroundColor : lightBackgroundColor)};
    color: ${(props) => (props.darkMode ? lightTextColor : darkTextColor)};
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.3s;
  }
`;

const HomePage: React.FunctionComponent = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
      <div>Hello World</div>
    </>
  );
};

export default HomePage;
