import { MessageInputMode } from "../constants/message-input-mode.enum";
import { MessageMode } from "../constants/message-mode.enum";
import { MessageBaseModel } from "./messageBase.model";

export class SendMessageModel extends MessageBaseModel {
    constructor(messageInputMode: MessageInputMode){
        super(MessageMode.SEND, messageInputMode);
    }
}