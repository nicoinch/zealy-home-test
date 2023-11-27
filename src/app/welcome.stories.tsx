import type { Meta, StoryObj } from '@storybook/react';
import { Welcome } from './welcome';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';

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
  parameters: {
    msw: {
      handlers: {
        jokes: rest.get(
          'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
          (_, res, ctx) => {
            return res(
              ctx.delay(500),
              ctx.json({
                created_at: '2020-01-05 13:42:18.823766',
                icon_url:
                  'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                id: 'cwguxfhptcuagndjdt1hya',
                updated_at: '2020-01-05 13:42:18.823766',
                url: 'https://api.chucknorris.io/jokes/cwguxfhptcuagndjdt1hya',
                value: 'A random Chuck Norris joke ' + Math.random(),
              })
            );
          }
        ),
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome!/gi)).toBeTruthy();
  },
};
