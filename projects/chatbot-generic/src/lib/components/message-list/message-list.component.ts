import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MessageInputMode } from '../../constants/message-input-mode.enum';
import { MessageItem } from '../../models/messageItem.model';
import { ReceiveMessageModel } from '../../models/receiveMessage.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'lib-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  @Input() messageItems: MessageItem[] = [];
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if(!this.messageItems.length) {
      this.createWelcomeMessage();
    }
  }

  createWelcomeMessage() {
    const text: string = `Hi ${this.userService.getUser()}, this is Chat Bot, and I am here to assist you. How can I help you today?`;
    const messageItem = new MessageItem();
    messageItem.received = new ReceiveMessageModel(MessageInputMode.VOICE);
    messageItem.received.text = text;
    this.messageItems.push(messageItem);
  }
}
