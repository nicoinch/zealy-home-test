import type { Meta, StoryObj } from '@storybook/react';
import { Welcome } from './welcome';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Welcome> = {
  component: Welcome,
  title: 'Welcome',
  argTypes: { onClick: { action: 'clicked' } },
};
export default meta;
type Story = StoryObj<typeof Welcome>;

export const Primary: Story = {
  args: {
    title: 'The page title',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome!/gi)).toBeTruthy();
  },
};
