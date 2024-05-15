import OverText from './OverText';
import type { Meta } from '@storybook/react';

export default {
  component: OverText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} as Meta<typeof OverText>;

export const Default = (args: { text: string; rows: number }) => (
  <OverText text={args.text} rows={args.rows} />
);
