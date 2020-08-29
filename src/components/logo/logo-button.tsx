import styled from 'styled-components';
import Button from '../styled/button';
import { logoColor } from '../../constants/colors';

interface ILogoButtonProps {
  darkMode: boolean;
}

const LogoButton = styled(Button)<ILogoButtonProps>`
  position: absolute;
  top: 0;
  left: 0;
  margin: min(10vw, 60px);

  svg {
    #T {
      fill: ${(props) => (props.darkMode ? logoColor.dark : logoColor.T)};
      transition-property: fill, filter;
      transition-duration: 0.3s;
    }

    #G {
      fill: ${(props) => (props.darkMode ? logoColor.dark : logoColor.G)};
      transition-property: fill, filter;
      transition-duration: 0.3s;
    }
  }

  &:focus,
  &:hover {
    svg {
      #T {
        fill: ${logoColor.T};
      }

      #G {
        fill: ${logoColor.G};
      }

      filter: drop-shadow(1px 1px 1px rgba(255, 255, 255, 0.1))
        drop-shadow(1px -1px 1px rgba(255, 255, 255, 0.1))
        drop-shadow(-1px 1px 1px rgba(255, 255, 255, 0.1))
        drop-shadow(-1px -1px 1px rgba(255, 255, 255, 0.1));
    }
  }
`;

export default LogoButton;
