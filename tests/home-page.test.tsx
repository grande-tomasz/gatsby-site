import { cleanup, render } from '@testing-library/react';
import * as Gatsby from 'gatsby';
import React from 'react';
import { darkTextColor, lightBackgroundColor } from '../src/constants/colors';
import HomePage from '../src/pages/index';

describe('Home Page', () => {
  const siteMetadata = {
    title: 'Gatsby Custom Project',
    description: 'Gatsby Custom Project',
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

  test('should have light background color by default', () => {
    expect(document.body).toHaveStyle(
      `background-color: ${lightBackgroundColor}`,
    );
  });

  test('should have dark text color by default', () => {
    expect(document.body).toHaveStyle(`color: ${darkTextColor}`);
  });
});
