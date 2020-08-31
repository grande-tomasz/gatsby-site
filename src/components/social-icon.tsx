import React from 'react';
import SocialIconAnchor from './styled/social-icon-anchor';
import GitHubSvg from './svg/github-svg';
import GmailSvg from './svg/gmail-svg';
import LinkedInSvg from './svg/linkedin-svg';
import PhoneCallSvg from './svg/phone-call-svg';
import SkypeSvg from './svg/skype-svg';
import { buttonHeight } from './styled/button';

interface ISocialIconProps {
  darkMode: boolean;
  name: string;
  url: string;
}

const getSocialIconSvg = (name: string): any => {
  switch (name) {
    case 'LinkedIn':
      return <LinkedInSvg height={buttonHeight.small} />;
    case 'GitHub':
      return <GitHubSvg height={buttonHeight.small} />;
    case 'Gmail':
      return <GmailSvg height={buttonHeight.small} />;
    case 'Skype':
      return <SkypeSvg height={buttonHeight.small} />;
    case 'PhoneCall':
      return <PhoneCallSvg height={buttonHeight.small} />;
    default:
      return null;
  }
};

const SocialIcon: React.FunctionComponent<ISocialIconProps> = ({
  darkMode,
  name,
  url,
}) => (
  <SocialIconAnchor darkMode={darkMode} href={url} target="_blank">
    {getSocialIconSvg(name)}
  </SocialIconAnchor>
);

export default SocialIcon;
