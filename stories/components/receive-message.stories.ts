import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ChatbotGenericModule, ReceiveMessageComponent, ReceiveMessageModel, MessageInputMode } from "@binubalan/chatbot-generic";

export default {
    title: 'Components/Receive message container',
    component: ReceiveMessageComponent,
    parameters:{},
    decorators: [
        moduleMetadata({
          declarations: [],
          imports: [ChatbotGenericModule],
        }),
      ],
} as Meta;


const Template: Story<ReceiveMessageComponent> = (args: ReceiveMessageComponent) => ({
    props: args,
  });

  const message1 = new ReceiveMessageModel(MessageInputMode.TEXT);
  message1.text = 'Leverage information and get a closer look at the future – with a demonstration of Chat’s real-time, predictive simulation capabilities';
  
  export const Default = Template.bind({});
  Default.args = {
    message: message1
  } as Partial<ReceiveMessageComponent>;

  export const WithAllTypeOfMessages = Template.bind({});
  const message2 = new ReceiveMessageModel(MessageInputMode.TEXT);
  message2.text = 'Leverage information and get a closer look at the future – with a demonstration of Chat’s real-time, predictive simulation capabilities';
  message2.addVideos(['https://www.youtube.com/embed/YeDECZK1Md8']);
  message2.addImages(['https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?cs=srgb&dl=pexels-pixabay-260689.jpg&fm=jpg']);
  message2.addUrls(['https://preview.Chat.com/']);

  WithAllTypeOfMessages.args = {
    message: message2
  } as Partial<ReceiveMessageComponent>;
