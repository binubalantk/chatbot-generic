import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { MessageBoxLauncherComponent } from "@binubalan/chatbot-generic";
import { FormsModule } from "@angular/forms";

export default {
    title: 'Components/Message box launcher',
    component: MessageBoxLauncherComponent,
    parameters:{},
    decorators: [
        moduleMetadata({
          declarations: [],
          imports: [FormsModule],
        }),
      ],
} as Meta;


const Template: Story<MessageBoxLauncherComponent> = (args: MessageBoxLauncherComponent) => ({
    props: args,
  });
  
  export const Default = Template.bind({});
  
  Default.args = {} as Partial<MessageBoxLauncherComponent>;
