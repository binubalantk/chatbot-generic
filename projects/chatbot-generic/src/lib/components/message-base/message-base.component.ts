import { Component, Input, OnInit } from '@angular/core';
import { MessageMode } from '../../constants/message-mode.enum';
import { MessageBaseModel } from '../../models/messageBase.model';

@Component({
  selector: 'lib-message-base',
  template: '<div>Base component</div>',
  styles: ['']
})
export class MessageBaseComponent<MESSAGE_TYPE extends MessageBaseModel>{

  @Input() message?: MESSAGE_TYPE;

  constructor() { }


  getMode(): MessageMode | undefined {
    return this.message?.getMode();
  }

  getMessageString(): string{
    if(!this.message) {
      return 'Nothing';
    }

    return Object.keys(this.message).join(',');
  }

}
