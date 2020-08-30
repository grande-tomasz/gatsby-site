import styled from 'styled-components';
import { darkModeSwitchColor } from '../../constants/colors';
import Button from './button';

interface IDarkModeSwitchButtonProps {
  darkMode: boolean;
}

const DarkModeSwitchButton = styled(Button)<IDarkModeSwitchButtonProps>`
  position: absolute;
  top: 0;
  right: 0;
  margin: min(10vw, 60px);

  svg {
    fill: ${(props) => (props.darkMode ? darkModeSwitchColor.dark : darkModeSwitchColor.light)};
    transition-property: fill, filter;
    transition-duration: 0.3s;
  }

  #dark-mode-switch_moon {
    transform: ${(props) => (props.darkMode ? 'translateX(90px)' : 'translateX(0)')};
    transition-property: transform;
    transition-duration: 0.3s;
  }

  &:focus,
  &:hover {
    svg {
      fill: ${(props) => (props.darkMode
          ? darkModeSwitchColor.hover.dark
          : darkModeSwitchColor.hover.light)};

      filter: drop-shadow(1px 1px 1px rgba(255, 255, 255, 0.1))
        drop-shadow(1px -1px 1px rgba(255, 255, 255, 0.1))
        drop-shadow(-1px 1px 1px rgba(255, 255, 255, 0.1))
        drop-shadow(-1px -1px 1px rgba(255, 255, 255, 0.1));
    }
  }
`;

export default DarkModeSwitchButton;
