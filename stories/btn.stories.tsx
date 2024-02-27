import { Meta, StoryObj } from '@storybook/react'
import Btn from './btn'
const meta: Meta<typeof Btn> = {
  component: Btn,
  title: 'Example/ Btn',
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['blue', 'red', 'green'],
      description: 'Color of the button'
    }
    
  },
  parameters: {
    docs: {
      description: {
        component: 'This is a button component used for...'
      }
    }
  }
  
}
export default meta
type Story = StoryObj<typeof meta>
export const Base: Story = {
  args: { color: 'red' },

}