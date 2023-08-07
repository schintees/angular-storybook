import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { IconButtonComponent } from '../lib/components/icon-button/icon-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

const meta: Meta<IconButtonComponent> = {
  title: 'IconButton',
  component: IconButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule
      ]
    }),
  ]
};

export default meta;

type Story = StoryObj<IconButtonComponent>;

export const AddToShoppingCart: Story = {
  args: {
    type: 'add',
    color: 'primary'
  }
};

export const ShoppingCart: Story = {
  args: {
    type: 'shopping_cart',
    color: 'accent'
  }
};

export const Edit: Story = {
  args: {
    type: 'open_in_new',
    color: 'primary'
  }
};

export const Add: Story = {
  args: {
    type: 'add',
    color: 'primary'
  }
};

export const Delete: Story = {
  args: {
    type: 'delete',
    color: 'warn'
  }
};

export const ArrowRight: Story = {
  args: {
    type: 'keyboard_arrow_right',
    color: 'accent'
  }
};

export const ArrowUpward: Story = {
  args: {
    type: 'arrow_upward',
    color: 'primary'
  }
};

export const ArrowDownward: Story = {
  args: {
    type: 'arrow_downward',
    color: 'primary'
  }
};

export const Close: Story = {
  args: {
    type: 'close',
    color: 'warn'
  }
};




