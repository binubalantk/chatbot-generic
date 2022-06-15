import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { MessageTextInputComponent } from "@binubalan/chatbot-generic";
import { FormsModule } from "@angular/forms";

export default {
    title: 'Components/Message text input',
    component: MessageTextInputComponent,
    parameters:{},
    decorators: [
        moduleMetadata({
          declarations: [],
          imports: [FormsModule],
        }),
      ],
} as Meta;


const Template: Story<MessageTextInputComponent> = (args: MessageTextInputComponent) => ({
    props: args,
  });
  
  export const Default = Template.bind({});
  
  Default.args = {} as Partial<MessageTextInputComponent>;
