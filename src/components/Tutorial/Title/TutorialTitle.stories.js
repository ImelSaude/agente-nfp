import Title from ".";

export default {
  title: "Components/Tutorial/Title",
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  number: 1,
  title: "Acesse o site da receita",
};
