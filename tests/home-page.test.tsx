import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { darkTextColor, lightBackgroundColor } from '../src/constants/colors';
import HomePage from '../src/pages/index';

describe('Home Page', () => {
  beforeAll(() => {
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
