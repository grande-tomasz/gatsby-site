import styled from 'styled-components';
import { darkModeSwitchColor, socialIconColor } from '../../constants/colors';

interface ISocialIconAnchorProps {
  darkMode: boolean;
}

const SocialIconAnchor = styled.a<ISocialIconAnchorProps>`
  #LinkedIn,
  #GitHub,
  #Gmail,
  #Skype,
  #PhoneCall {
    fill: ${(props) => (props.darkMode ? darkModeSwitchColor.dark : darkModeSwitchColor.light)};
    transition-property: fill;
    transition-duration: 0.3s;
  }

  &:focus,
  &:hover {
    #LinkedIn {
      fill: ${socialIconColor.linkedIn};
    }

    #GitHub {
      fill: ${socialIconColor.gitHub};
    }

    #Gmail {
      fill: ${socialIconColor.gmail};
    }

    #Skype {
      fill: ${socialIconColor.skype};
    }

    #PhoneCall {
      fill: ${socialIconColor.phoneCall};
    }
  }
`;

export default SocialIconAnchor;
