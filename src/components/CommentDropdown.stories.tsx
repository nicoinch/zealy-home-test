import type { Meta, StoryObj } from '@storybook/react';
import { CommentDropdown } from './CommentDropdown';

const meta: Meta<typeof CommentDropdown> = {
  component: CommentDropdown,
  title: 'CommentDropdown',
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof CommentDropdown>;

export const Primary: Story = {
  args: {
    userAvatar:
      'https://secure.gravatar.com/avatar/72fa1cd77b1ed5366756a0e8c4d1c3f3b8706c7461b82639fb201fd5afabe598',
    userName: 'Jane Doe',
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
  },
};
