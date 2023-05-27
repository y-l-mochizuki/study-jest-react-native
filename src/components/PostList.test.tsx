import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import PostList from './PostList';
import {fetchPosts} from '../api';

jest.mock('../api');

const mockFetchPosts = fetchPosts as jest.MockedFunction<typeof fetchPosts>;

describe('PostList', () => {
  it('render posts after they are fetched', async () => {
    const mockPosts = [
      {id: 1, title: 'Post 1', body: 'This is the first post'},
      {id: 2, title: 'Post 2', body: 'This is the second post'},
    ];

    mockFetchPosts.mockResolvedValue(mockPosts);

    const {getByText} = render(<PostList />);

    for (const post of mockPosts) {
      await waitFor(() => {
        expect(getByText(post.title)).toBeTruthy();
        expect(getByText(post.body)).toBeTruthy();
      });
    }

    expect(mockFetchPosts).toHaveBeenCalled();
  });
});
