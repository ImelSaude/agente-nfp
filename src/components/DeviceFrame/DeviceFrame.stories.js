import DeviceFrame from ".";

export default {
  title: "Components/DeviceFrame",
  component: DeviceFrame,
  argTypes: {
    activeImg: { type: "number" },
    images: {
      control: {
        type: "select",
        options: [
          [
            "/images/celular-passo1-orig.png",
            "/images/celular-passo2-orig.png",
            "/images/celular-passo3-orig.png",
            "/images/celular-passo4-orig.png",
            "/images/celular-passo5-orig.png",
            "/images/celular-passo6-orig.png",
          ],
          ["/images/pc-passo1-orig.png", "/images/pc-passo6.png"],
        ],
      },
    },
    deviceName: {
      control: {
        type: "select",
        options: [
          "iphone6",
          "iphone6",
          "iphone6plus",
          "iphone5s",
          "iphone5c",
          "ipad",
          "iphone4s",
          "nexus5",
          "s5",
          "htc-one",
          "macbook",
        ],
      },
    },
  },
};

const Template = (args) => <DeviceFrame {...args} />;

export const Iphone = Template.bind({});
Iphone.args = {
  activeImg: 0,
  images: [
    "/images/celular-passo1-orig.png",
    "/images/celular-passo2-orig.png",
    "/images/celular-passo3-orig.png",
    "/images/celular-passo4-orig.png",
    "/images/celular-passo5-orig.png",
    "/images/celular-passo6-orig.png",
  ],
  deviceName: "iphone6",
};

export const MacBook = Template.bind({});
MacBook.args = {
  activeImg: 0,
  images: ["/images/pc-passo1-orig.png", "/images/pc-passo6.png"],
  deviceName: "macbook",
};
