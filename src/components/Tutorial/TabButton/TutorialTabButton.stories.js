import TabButton from ".";

export default {
  title: "Components/Tutorial/TabButton",
  component: TabButton,
};

const Template = (args) => <TabButton className="w-1/2" {...args} />;

export const Default = Template.bind({});
Default.args = {};
