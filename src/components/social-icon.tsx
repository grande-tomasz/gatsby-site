import React from 'react';
import SocialIconAnchor from './styled/social-icon-anchor';
import GitHubSvg from './svg/github-svg';
import GmailSvg from './svg/gmail-svg';
import LinkedInSvg from './svg/linkedin-svg';
import PhoneCallSvg from './svg/phone-call-svg';
import SkypeSvg from './svg/skype-svg';

interface ISocialIconProps {
  darkMode: boolean;
  name: string;
  url: string;
}

const getSocialIconSvg = (name: string): any => {
  switch (name) {
    case 'LinkedIn':
      return <LinkedInSvg />;
    case 'GitHub':
      return <GitHubSvg />;
    case 'Gmail':
      return <GmailSvg />;
    case 'Skype':
      return <SkypeSvg />;
    case 'PhoneCall':
      return <PhoneCallSvg />;
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
