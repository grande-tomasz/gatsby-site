import React from 'react';
import LogoSvg from './logo-svg';
import LogoButton from './logo-button';

interface ILogoProps {
  darkMode: boolean;
}

const Logo: React.FunctionComponent<ILogoProps> = ({ darkMode }) => (
  <LogoButton
    aria-label="dark-mode-switch"
    role="button"
    type="button"
    darkMode={darkMode}
  >
    <LogoSvg />
  </LogoButton>
);

export default Logo;
