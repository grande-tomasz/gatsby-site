import React from 'react';
import DarkModeSwitch from '../components/dark-mode-switch';
import Logo from '../components/logo';
import SEO from '../components/seo';
import GlobalStyle from '../components/styled/global-style';

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
