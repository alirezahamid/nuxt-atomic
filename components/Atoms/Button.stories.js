/** @format */

import Button from "./Button.vue";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    type: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Click me</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};
