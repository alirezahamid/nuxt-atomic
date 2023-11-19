/** @format */

import Button from "./Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    buttonType: { control: "text" },
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
  buttonType: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: "secondary",
};
