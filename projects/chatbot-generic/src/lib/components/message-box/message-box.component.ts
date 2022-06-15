import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { InputControlData } from '../../models/inputControlData.model';
import { MessageItem } from '../../models/messageItem.model';
import { SendMessageModel } from '../../models/sendMessage.model';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'lib-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  @Output() closeMessageBox = new EventEmitter();

  @ViewChild('messagelistScrollable', { read: ElementRef }) messagelistScrollable?: ElementRef;

  messageItems: MessageItem[] = [];

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.gethandler().subscribe(()=>{
      const messageList = this.messagelistScrollable
      if(messageList) {
        setTimeout(()=>{
          messageList.nativeElement.scrollTop = messageList.nativeElement.scrollHeight;
        }, 500)
      }
    });
  }

  onMessageSend({message, mode}: InputControlData) {
    //create message object
    const sendMessage = new SendMessageModel(mode);
    sendMessage.text = message;
    const messageItem = new MessageItem(sendMessage);
    this.messageItems.push(messageItem);
  }

  onAppClose() {
    this.closeMessageBox.emit(false);
  }

}
