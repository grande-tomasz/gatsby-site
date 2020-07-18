import { cleanup, render } from '@testing-library/react';
import * as Gatsby from 'gatsby';
import React from 'react';
import {
  darkBackgroundColor,
  lightBackgroundColor,
} from '../src/constants/colors';
import HomePage from '../src/pages/index';

describe('Home Page', () => {
  const siteMetadata = {
    title: 'Gatsby Custom Project',
    description: 'Gatsby Custom Project',
  };
  // const prefersLightColorScheme = '(prefers-color-scheme: light)';
  const prefersDarkColorScheme = '(prefers-color-scheme: dark)';

  const map: {
    [prefersDarkColorScheme]?: boolean;
  } = {};
  const setPreferredDarkColorScheme = (darkMode: boolean) => {
    window.matchMedia = jest.fn().mockImplementation((mediaQuery) => ({
      matches: mediaQuery === prefersDarkColorScheme ? darkMode : !darkMode,
      media: '',
      onchange: jest.fn(),
      addEventListener: jest
        .fn()
        .mockImplementation(
          (event: typeof prefersDarkColorScheme, callback) => {
            map[event] = callback;
          },
        ),
      removeEventListener: jest.fn(),
    }));
  };

  beforeAll(() => {
    const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata,
      },
    }));

    render(<HomePage />);
  });

  afterAll(cleanup);

  test('should have light background color when in system light mode', () => {
    setPreferredDarkColorScheme(false);

    expect(window.matchMedia('(prefers-color-scheme: dark)').matches).toEqual(
      false,
    );
    expect(document.body).toHaveStyle(
      `background-color: ${lightBackgroundColor}`,
    );
  });

  test.skip('should have dark background color in system dark mode', () => {
    setPreferredDarkColorScheme(true);

    expect(window.matchMedia('(prefers-color-scheme: dark)').matches).toEqual(
      true,
    );
    expect(document.body).toHaveStyle(
      `background-color: ${darkBackgroundColor}`,
    );
  });
});
