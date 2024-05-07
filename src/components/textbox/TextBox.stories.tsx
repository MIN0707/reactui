import TextBox from './TextBox';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof TextBox>;

export const Default = () => {
  return <TextBox />;
};
