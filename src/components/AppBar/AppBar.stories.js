import AppBar from ".";

export default {
  title: "Components/AppBar",
  component: AppBar,
};

const Template = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
