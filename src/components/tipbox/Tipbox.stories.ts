import Tipbox from './Tipbox';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: Tipbox,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof Tipbox>;

type Story = StoryObj<typeof Tipbox>;

export const ToolTip: Story = {
  args: {
    text: 'Hover me',
    type: 'tooltip',
    tip: 'tooltip',
  },
};

export const PopupTip: Story = {
  args: {
    text: 'Click me',
    type: 'popup',
    tip: 'popup',
  },
};
