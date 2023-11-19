/** @format */

import Input from "./Input.vue";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    type: { control: "text" },
    name: { control: "text" },
    placeholder: { control: "text" },
  },
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

export const Email = Template.bind({});
Email.args = {
  type: "email",
  name: "email",
  placeholder: "Email",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  name: "password",
  placeholder: "Password",
};
