import { ReceiveMessageModel } from "./receiveMessage.model";
import { SendMessageModel } from "./sendMessage.model";

export class MessageItem {
    sent?: SendMessageModel;
    received? : ReceiveMessageModel;
    constructor(sentMessage?: SendMessageModel){
        this.sent = sentMessage;
    }
}