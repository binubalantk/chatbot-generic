import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ChatbotGenericModule, SendMessageComponent } from "@binubalan/chatbot-generic";

export default {
    title: 'Components/Send message container',
    component: SendMessageComponent,
    parameters:{},
    decorators: [
        moduleMetadata({
          declarations: [],
          imports: [ChatbotGenericModule],
        }),
      ],
} as Meta;


const Template: Story<SendMessageComponent> = (args: SendMessageComponent) => ({
    props: args,
  });
  
  export const Default = Template.bind({});
  
  Default.args = {} as Partial<SendMessageComponent>;
