import Logo from ".";

export default {
  title: "Components/AppBar/Logo",
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};
