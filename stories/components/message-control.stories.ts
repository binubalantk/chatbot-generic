import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { MessageControlComponent, ChatbotGenericModule } from "@binubalan/chatbot-generic";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MessageInputMode } from "projects/chatbot-generic/src/lib/constants/message-input-mode.enum";

export default {
    title: 'Components/Message Control component',
    component: MessageControlComponent,
    parameters:{},
    decorators: [
        moduleMetadata({
          declarations: [],
          imports: [CommonModule, FormsModule, ChatbotGenericModule],
        }),
      ],
} as Meta;


const Template: Story<MessageControlComponent> = (args: MessageControlComponent) => ({
    props: args,
  });
  
  export const Default = Template.bind({});
  
  Default.args = {
    inputMode: MessageInputMode.TEXT
  } as Partial<MessageControlComponent>;

  export const VoiceActive = Template.bind({});
  
  VoiceActive.args = {
    inputMode: MessageInputMode.VOICE
  } as Partial<MessageControlComponent>;
