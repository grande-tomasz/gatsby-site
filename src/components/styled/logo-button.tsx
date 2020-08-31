import styled from 'styled-components';
import Button from './button';
import { logoColor } from '../../constants/colors';

interface ILogoButtonProps {
  darkMode: boolean;
}

const LogoButton = styled(Button)<ILogoButtonProps>`
  position: absolute;
  top: 0;
  left: 0;
  margin: min(10vw, 60px);

  #T {
    fill: ${(props) => (props.darkMode ? logoColor.dark : logoColor.T)};
    transition-property: fill;
    transition-duration: 0.3s;
  }

  #G {
    fill: ${(props) => (props.darkMode ? logoColor.dark : logoColor.G)};
    transition-property: fill;
    transition-duration: 0.3s;
  }

  &:focus,
  &:hover {
    #T {
      fill: ${logoColor.T};
    }

    #G {
      fill: ${logoColor.G};
    }
  }
`;

export default LogoButton;
