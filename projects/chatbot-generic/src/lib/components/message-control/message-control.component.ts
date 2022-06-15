import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageInputMode } from '../../constants/message-input-mode.enum';
import { InputControlData } from '../../models/inputControlData.model';

@Component({
  selector: 'lib-message-control',
  templateUrl: './message-control.component.html',
  styleUrls: ['./message-control.component.scss']
})
export class MessageControlComponent implements OnInit {

  get allnputMode(): typeof MessageInputMode{
    return MessageInputMode;
  }

  @Output() onMessageSend = new EventEmitter<InputControlData>()

  inputMode: MessageInputMode = this.allnputMode.TEXT;

  constructor() { }

  ngOnInit(): void {
  }

  onInputModeChange(mode: MessageInputMode) {
    this.inputMode = mode;
  }

  onVoiceClicked() {
    this.onInputModeChange(MessageInputMode.VOICE);
  }

  onNoVoiceMessage() {
    this.onInputModeChange(MessageInputMode.TEXT);
  }

  onMessage(message: string) {
    this.onMessageSend.emit({
      message,
      mode: this.inputMode
    });
    this.onInputModeChange(MessageInputMode.TEXT);
  }

}
