import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { MessageHeaderComponent} from "@binubalan/chatbot-generic";
import { FormsModule } from "@angular/forms";

export default {
    title: 'Components/Message header',
    component: MessageHeaderComponent,
    parameters:{},
    decorators: [
        moduleMetadata({
          declarations: [],
          imports: [FormsModule],
        }),
      ],
} as Meta;


const Template: Story<MessageHeaderComponent> = (args: MessageHeaderComponent) => ({
    props: args,
  });
  
  export const Default = Template.bind({});
  
  Default.args = {} as Partial<MessageHeaderComponent>;
