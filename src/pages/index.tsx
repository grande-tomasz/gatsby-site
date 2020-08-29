import React from 'react';
import { createGlobalStyle } from 'styled-components';
import DarkModeSwitch from '../components/dark-mode-switch/dark-mode-switch';
import Logo from '../components/logo/logo';
import SEO from '../components/seo';
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
      <SEO title="Home Page" description="Personal Website Home Page" />
      <GlobalStyle darkMode={darkMode} />
      <Logo darkMode={darkMode} />
      <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
};

export default HomePage;
