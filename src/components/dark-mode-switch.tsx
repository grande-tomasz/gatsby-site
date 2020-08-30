import React from 'react';
import DarkModeSwitchButton from './styled/dark-mode-switch-button';
import DarkModeSwitchSvg from './svg/dark-mode-switch-svg';

interface IDarkModeSwitchProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeSwitch: React.FunctionComponent<IDarkModeSwitchProps> = ({
  darkMode,
  setDarkMode,
}) => (
  <DarkModeSwitchButton
    aria-checked="false"
    aria-label="dark-mode-switch"
    role="switch"
    type="button"
    darkMode={darkMode}
    onClick={() => setDarkMode(!darkMode)}
  >
    <DarkModeSwitchSvg />
  </DarkModeSwitchButton>
);

export default DarkModeSwitch;
