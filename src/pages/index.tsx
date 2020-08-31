import React from 'react';
import DarkModeSwitch from '../components/dark-mode-switch';
import Logo from '../components/logo';
import SEO from '../components/seo';
import SocialIconsList from '../components/social-icons-list';
import GlobalStyle from '../components/styled/global-style';

const HomePage: React.FunctionComponent = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <>
      <SEO title="Home Page" description="Personal Website Home Page" />
      <GlobalStyle darkMode={darkMode} />
      <Logo darkMode={darkMode} />
      <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
      <SocialIconsList darkMode={darkMode} />
    </>
  );
};

export default HomePage;
