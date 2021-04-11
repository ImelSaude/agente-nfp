import ImageBlock from ".";

export default {
  title: "Components/Hero/ImageBlock",
  component: ImageBlock,
};

const Template = ({ height, width, ...args }) => (
  <div style={{ maxWidth: width, minHeight: height }} className="flex">
    <ImageBlock {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  height: "500px",
  width: "1000px",
};
