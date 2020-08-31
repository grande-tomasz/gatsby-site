import React from 'react';
import SocialIcon from './social-icon';
import SocialIconsContainer from './styled/social-icons-container';
import socialIconData from '../constants/social-icons-data';

interface ISocialIconsListProps {
  darkMode: boolean;
}

type SocialIconName = 'LinkedIn' | 'GitHub' | 'Gmail' | 'Skype' | 'PhoneCall';

const SocialIconsList: React.FunctionComponent<ISocialIconsListProps> = ({
  darkMode,
}) => (
  <SocialIconsContainer darkMode={darkMode}>
    {Object.keys(socialIconData).map((socialIconName: string) => (
      <SocialIcon
        key={socialIconName}
        darkMode={darkMode}
        name={socialIconName}
        url={socialIconData[socialIconName as SocialIconName]}
      />
    ))}
  </SocialIconsContainer>
);

export default SocialIconsList;
