import styled from 'styled-components';
import React from 'react';
import renderer from 'react-test-renderer';

const Button = styled.button`
  color: red;
`;

test('Button matches snapshot', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
