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
    transition: all 0.3s;
  }
`;

export default GlobalStyle;
