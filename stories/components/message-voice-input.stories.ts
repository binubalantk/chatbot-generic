import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ChatbotGenericModule, MessageVoiceInputComponent } from "@binubalan/chatbot-generic";

export default {
    title: 'Components/Message voice input',
    component: MessageVoiceInputComponent,
    parameters:{},
    decorators: [
        moduleMetadata({
          declarations: [],
          imports: [ChatbotGenericModule],
        }),
      ],
} as Meta;


const Template: Story<MessageVoiceInputComponent> = (args: MessageVoiceInputComponent) => ({
    props: args,
  });
  
  export const Default = Template.bind({});
  
  Default.args = {} as Partial<MessageVoiceInputComponent>;
