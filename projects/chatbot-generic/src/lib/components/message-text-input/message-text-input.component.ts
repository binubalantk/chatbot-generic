import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-message-text-input',
  templateUrl: './message-text-input.component.html',
  styleUrls: ['./message-text-input.component.scss']
})
export class MessageTextInputComponent implements OnInit {

  @Output() onSend = new EventEmitter<string>();
  @Output() onVoiceSelected = new EventEmitter<void>();

  message: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  onSendClick() {
    if(!this.message) {
      return;
    }
    this.onSend.emit(this.message);
    this.message = '';
  }

  onVoiceClick() {
    this.onVoiceSelected.emit();
  }

}
