import * as React from 'react';
import { getButtonHeight } from '../styled/button';
import DarkModeSwitchButton from './dark-mode-switch-button';
import DarkModeSwitchSvg from './dark-mode-switch-svg';

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
    <DarkModeSwitchSvg height={getButtonHeight()} />
  </DarkModeSwitchButton>
);

export default DarkModeSwitch;
