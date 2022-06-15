import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ChatbotGenericModule, ChatbotGenericComponent  } from '@binubalan/chatbot-generic';


export default {
  title: 'Example/Chatbot Generic component example',
  component: ChatbotGenericComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout=
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [ChatbotGenericModule],
    }),
  ],
} as Meta;

const Template: Story<ChatbotGenericComponent> = (args: ChatbotGenericComponent) => ({
  props: args,
});

export const Default = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/angular/writing-tests/interaction-testing
Default.args = {
  userName: 'Binu Balan'
} as Partial<ChatbotGenericComponent>;
