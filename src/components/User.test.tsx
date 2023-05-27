import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import User from './User';

test('render user data after a delay', async () => {
  const {getByText, queryByText} = render(<User id="1" />);

  expect(getByText(/loading/i)).toBeDefined();

  await waitFor(() => expect(queryByText(/Loading.../i)).toBeNull());

  expect(getByText(/John Doe/i)).toBeDefined();
});
