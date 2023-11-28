import type { Meta, StoryObj } from '@storybook/react';
import { CommentsList } from './CommentsList';

const meta: Meta<typeof CommentsList> = {
  component: CommentsList,
  title: 'CommentsList',
};
export default meta;
type Story = StoryObj<typeof CommentsList>;

export const Primary: Story = {
  args: {
    comments: [
      {
        author: 'John Doe',
        authorAvatar:
          'https://secure.gravatar.com/avatar/72fa1cd77b1ed5366756a0e8c4d1c3f3b8706c7461b82639fb201fd5afabe598',
        content: 'This is a comment',
        createdAt: '2 days ago',
      },
      {
        author: 'John Doe',
        authorAvatar:
          'https://secure.gravatar.com/avatar/72fa1cd77b1ed5366756a0e8c4d1c3f3b8706c7461b82639fb201fd5afabe598',
        content: 'This is another comment',
        createdAt: 'Just now',
      },
    ],
    currentUserName: 'Jane Doe',
    currentUserAvatar:
      'https://secure.gravatar.com/avatar/72fa1cd77b1ed5366756a0e8c4d1c3f3b8706c7461b82639fb201fd5afabe598',
  },
};
