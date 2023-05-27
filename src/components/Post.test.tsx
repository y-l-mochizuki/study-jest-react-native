import React from 'react';
import {render} from '@testing-library/react-native';
import Post from './Post';

test('displays props', () => {
  const {getByText} = render(<Post title="title" body="body" />);

  expect(getByText(/title/i)).toBeDefined();
  expect(getByText(/body/i)).toBeDefined();
});
