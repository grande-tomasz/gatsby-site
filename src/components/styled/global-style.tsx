import { createGlobalStyle } from 'styled-components';
import {
  darkBackgroundColor,
  darkTextColor,
  lightBackgroundColor,
  lightTextColor,
} from '../../constants/colors';

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
    transition-property: background-color;
    transition-duration: 0.3s;
  }

  a,
  button {
    svg {
      transition-property: filter;
      transition-duration: 0.3s;
    }

    &:focus,
    &:hover {
      svg {
        filter: drop-shadow(1px 1px 1px rgba(255, 255, 255, 0.1))
          drop-shadow(1px -1px 1px rgba(255, 255, 255, 0.1))
          drop-shadow(-1px 1px 1px rgba(255, 255, 255, 0.1))
          drop-shadow(-1px -1px 1px rgba(255, 255, 255, 0.1));
      }
    }
  }
`;

export default GlobalStyle;
