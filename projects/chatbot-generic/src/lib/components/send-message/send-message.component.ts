import { Component, Input, OnInit } from '@angular/core';
import { SendMessageModel } from '../../models/sendMessage.model';
import { MessageBaseComponent } from '../message-base/message-base.component';

@Component({
  selector: 'lib-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent extends MessageBaseComponent<SendMessageModel> {

}
