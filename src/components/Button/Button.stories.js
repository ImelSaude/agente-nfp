import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = ({ texto }) => <Button>{texto}</Button>;

export const Default = Template.bind({});
Default.args = {
  texto: "Doe suas notas fiscais",
};
