import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ChatbotGenericModule, MessageBoxComponent } from "@binubalan/chatbot-generic";

export default {
    title: 'Components/Message box',
    component: MessageBoxComponent,
    parameters:{},
    decorators: [
        moduleMetadata({
          declarations: [],
          imports: [ChatbotGenericModule],
        }),
      ],
} as Meta;


const Template: Story<MessageBoxComponent> = (args: MessageBoxComponent) => ({
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {
  } as Partial<MessageBoxComponent>;
