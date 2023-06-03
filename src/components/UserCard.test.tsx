import React from 'react';
import {render} from '@testing-library/react-native';
import {UserCard} from './USerCard';

describe('displays user name after user has loaded', () => {
  it('', async () => {
    const mockUser = {
      avatar: 'https://example.com/avatar.png',
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet',
    };

    const {findByText, findByTestId} = render(<UserCard user={mockUser} />);
    const avatar = await findByTestId('user-avatar');
    expect(avatar.props.source.uri).toBe(mockUser.avatar);

    const nameElement = await findByText(mockUser.name);
    expect(nameElement).toBeDefined();

    const description = await findByText(mockUser.description);
    expect(description).toBeDefined();
  });
});
