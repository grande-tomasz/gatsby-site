import React from 'react';
import { buttonHeight } from '../styled/button';

export interface IGmailSvgProps {
  height?: string;
}

const GmailSvg: React.FunctionComponent<IGmailSvgProps> = ({
  height = buttonHeight.medium,
}) => (
  <svg
    width={height}
    viewBox="0 0 800 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="Gmail"
      d="M800 50V550C800 578.333 778.333 600 750 600H700V146.233L400 361.667L100 146.233V600H50C21.6333 600 0 578.333 0 550V50C0 35.8333 5.4 23.3333 14.3667 14.4C23.3333 5.33333 35.8667 0 50 0H66.6667L400 241.667L733.333 0H750C764.167 0 776.667 5.4 785.633 14.4C794.633 23.3333 800 35.8333 800 50Z"
    />
  </svg>
);

export default GmailSvg;
