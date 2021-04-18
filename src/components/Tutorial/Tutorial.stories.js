import Tutorial from ".";

export default {
  title: "Components/Tutorial",
  component: Tutorial,
};

const Template = (args) => <Tutorial {...args} />;

export const Default = Template.bind({});
Default.args = {};
