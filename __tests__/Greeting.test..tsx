import React from 'react';
import {render} from '@testing-library/react-native';

import Greeting from '../src/components/Greeting';

test('render a message with the provided name', () => {
  const {getByText} = render(<Greeting name="World" />);
  const greetingElement = getByText(/Hello World/i);
  expect(greetingElement).toBeDefined();
});
