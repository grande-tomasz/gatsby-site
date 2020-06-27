import styled from 'styled-components';

enum BUTTON_SIZE {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface IButtonProps {
  size?: BUTTON_SIZE;
}

const buttonHeight = {
  [BUTTON_SIZE.small]: '42px',
  [BUTTON_SIZE.medium]: '60px',
  [BUTTON_SIZE.large]: '72px',
};

export const getButtonHeight = (size?: BUTTON_SIZE): string => {
  const height: string = size
    ? buttonHeight[size]
    : buttonHeight[BUTTON_SIZE.medium];

  return height;
};

const Button = styled.button<IButtonProps>`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  height: ${(props) => getButtonHeight(props.size)};
  margin: 0;
  padding: 0;
`;

export default Button;
