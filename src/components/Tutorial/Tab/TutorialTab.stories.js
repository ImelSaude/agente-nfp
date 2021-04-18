import Tab from ".";
import slideDecks from "../slideDecks";

export default {
  title: "Components/Tutorial/Tab",
  component: Tab,
};

const Template = (args) => <Tab {...args} />;

export const PhoneTab = Template.bind({});
PhoneTab.args = {
  variant: "phone",
  slideDeck: slideDecks.phone,
};

export const PCTab = Template.bind({});
PCTab.args = {
  variant: "laptop",
  slideDeck: slideDecks.laptop,
};
