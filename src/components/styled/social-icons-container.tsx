import styled from 'styled-components';

interface ISocialIconsContainerProps {
  darkMode: boolean;
}

const SocialIconsContainer = styled.div<ISocialIconsContainerProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: min(10vw, 60px);

  a {
    margin: min(10vw, 60px) 0;
    display: flex;
    align-items: center;
  }
`;

export default SocialIconsContainer;
