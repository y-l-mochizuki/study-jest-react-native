import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {CustomButton} from './CustomButton';

describe('displays CustomButton', () => {
  it('', async () => {
    const mockProps = {
      onPress: jest.fn(),
      title: 'hoge',
    };

    const {findByText} = render(<CustomButton {...mockProps} />);
    expect(findByText).toBeDefined();

    const buttonElement = await findByText(mockProps.title);
    fireEvent.press(buttonElement);
    expect(mockProps.onPress).toHaveBeenCalled();
  });
});
