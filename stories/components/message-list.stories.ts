import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { ChatbotGenericModule, MessageListComponent, ReceiveMessageModel, SendMessageModel, MessageItem, MessageInputMode } from "@binubalan/chatbot-generic";

export default {
    title: 'Components/Message list',
    component: MessageListComponent,
    parameters:{},
    decorators: [
        moduleMetadata({
          declarations: [],
          imports: [ChatbotGenericModule],
        }),
      ],
} as Meta;


const Template: Story<MessageListComponent> = (args: MessageListComponent) => ({
    props: args,
  });
  
  export const Default = Template.bind({});
  
  const sentMessage = new SendMessageModel(MessageInputMode.TEXT);
  const receivedMessage = new ReceiveMessageModel(MessageInputMode.TEXT);

  sentMessage.text = "What is profile group?";

  receivedMessage.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
  receivedMessage.addVideos(['https://www.youtube.com/embed/YeDECZK1Md8']);
  receivedMessage.addImages(['https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?cs=srgb&dl=pexels-pixabay-260689.jpg&fm=jpg']);
  receivedMessage.addUrls(['https://preview.Chat.com/']);

  const messageItem = new MessageItem(sentMessage);
  messageItem.received = receivedMessage;

  const sentMessage2 = new SendMessageModel(MessageInputMode.TEXT);
  const receivedMessage2 = new ReceiveMessageModel(MessageInputMode.TEXT);

  sentMessage2.text = "What is profile group?";

  receivedMessage2.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

  const messageItem2 = new MessageItem(sentMessage2);
  messageItem2.received = receivedMessage2;

  Default.args = {
    messageItems: [messageItem, messageItem2]
  } as Partial<MessageListComponent>;
