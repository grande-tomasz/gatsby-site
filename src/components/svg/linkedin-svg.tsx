import React from 'react';
import { buttonHeight } from '../styled/button';

export interface ILinkedInSvgProps {
  height?: string;
}

const LinkedInSvg: React.FunctionComponent<ILinkedInSvgProps> = ({
  height = buttonHeight.medium,
}) => (
  <svg
    height={height}
    viewBox="0 0 800 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="LinkedIn"
      d="M681.567 681.733H563.1V496.1C563.1 451.833 562.2 394.867 501.367 394.867C439.6 394.867 430.167 443.033 430.167 492.833V681.733H311.7V300H425.5V352.033H427.033C442.933 322.033 481.6 290.367 539.367 290.367C659.4 290.367 681.6 369.367 681.6 472.2V681.733H681.567ZM177.9 247.767C139.767 247.767 109.133 216.9 109.133 178.933C109.133 141 139.8 110.167 177.9 110.167C215.9 110.167 246.7 141 246.7 178.933C246.7 216.9 215.867 247.767 177.9 247.767ZM237.3 681.733H118.5V300H237.3V681.733ZM740.833 0H59.0333C26.4 0 0 25.8 0 57.6333V742.367C0 774.233 26.4 800 59.0333 800H740.733C773.333 800 800 774.233 800 742.367V57.6333C800 25.8 773.333 0 740.733 0H740.833Z"
    />
  </svg>
);

export default LinkedInSvg;
