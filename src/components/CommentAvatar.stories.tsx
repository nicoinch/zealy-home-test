import type { Meta, StoryObj } from '@storybook/react';
import { CommentAvatar } from './CommentAvatar';

const meta: Meta<typeof CommentAvatar> = {
  component: CommentAvatar,
  title: 'CommentAvatar',
  decorators: [
    (Story) => (
      <div className="p-4 flex items-start">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof CommentAvatar>;

export const Primary: Story = {
  args: {
    avatarImage:
      'https://secure.gravatar.com/avatar/72fa1cd77b1ed5366756a0e8c4d1c3f3b8706c7461b82639fb201fd5afabe598',
  },
};

export const WithoutImage: Story = {
  args: {
    avatarFallback: 'NI',
  },
};
