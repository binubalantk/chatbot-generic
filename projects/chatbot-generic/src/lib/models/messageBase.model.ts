import { MessageInputMode } from "../constants/message-input-mode.enum";
import { MessageMode } from "../constants/message-mode.enum";

export class MessageBaseModel {
    private _text: string;
    private mode: MessageMode;
    messageInputMode: MessageInputMode;

    constructor(mode: MessageMode, messageInputMode: MessageInputMode) {
        this._text = '';
        this.mode = mode;
        this.messageInputMode = messageInputMode;
    }

    set text(message: string) {
        this._text = message;
    }

    get text(): string {
        return this._text;
    }

    getMode(): MessageMode {
        return this.mode;
    }
}