import { cleanup, fireEvent, render } from '@testing-library/react';
import * as Gatsby from 'gatsby';
import React from 'react';
import { darkBackgroundColor, lightTextColor } from '../src/constants/colors';
import HomePage from '../src/pages/index';

describe('Dark Mode Switch', () => {
  let darkModeSwitch: HTMLElement;
  const siteMetadata = {
    title: 'Gatsby Custom Project',
    description: 'Gatsby Custom Project',
  };

  beforeEach(() => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata,
      },
    }));

    const { getByRole } = render(<HomePage />);

    darkModeSwitch = getByRole('switch', { name: 'dark-mode-switch' });
  });

  afterEach(cleanup);

  test('should exist on Home Page', () => {
    expect(darkModeSwitch).toBeDefined();
  });

  describe('Dark Mode turned on', () => {
    beforeEach(() => {
      fireEvent.click(darkModeSwitch);
    });

    test('should change background color to dark', () => {
      expect(document.body).toHaveStyle(
        `background-color: ${darkBackgroundColor}`,
      );
    });

    test('should change text color to light', () => {
      expect(document.body).toHaveStyle(`color: ${lightTextColor}`);
    });

    test('should change switch icon to eclipse', () => {
      const moonIcon: HTMLElement | null = darkModeSwitch.querySelector(
        '#dark-mode-switch_moon',
      );

      expect(moonIcon).toHaveStyle('transform: translateX(90px)');
    });
  });
});
