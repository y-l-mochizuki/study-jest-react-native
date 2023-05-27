import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import App from '../../App';

jest.mock('../api', () => {
  return {
    fetchUser: jest.fn(() => Promise.resolve({name: 'John Doe'})),
  };
});

test('displays user name after user has loaded', async () => {
  const {getByText} = render(<App />);

  await waitFor(() => getByText(/John Doe/i));

  expect(getByText(/John Doe/i)).toBeDefined();
});
