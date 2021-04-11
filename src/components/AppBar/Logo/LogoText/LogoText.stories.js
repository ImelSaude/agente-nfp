import LogoText from ".";

export default {
  title: "Components/AppBar/Logo/LogoText",
  component: LogoText,
};

const Template = (args) => <LogoText {...args} />;

export const Default = Template.bind({});
Default.args = { children: "Teste" };
