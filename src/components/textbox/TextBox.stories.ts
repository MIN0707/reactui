import TextBox from './TextBox';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: TextBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof TextBox>;

/* 
지현님이 컴포넌트를 export 하시는 것을 알려주셨었는데,
그렇게 해보니 Storybook에서 Control 기능이 작동되지 않았다.
*/
type Story = StoryObj<typeof TextBox>;

export const Default: Story = {
  args: {
    canResize: true,
  },
};
