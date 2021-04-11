import AppDrawer from ".";

export default {
  title: "Components/AppDrawer",
  component: AppDrawer,
};

const Template = (args) => <AppDrawer {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
