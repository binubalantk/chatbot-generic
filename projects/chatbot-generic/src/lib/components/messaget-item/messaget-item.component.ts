import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageItem } from '../../models/messageItem.model';
import { ReceiveMessageModel } from '../../models/receiveMessage.model';
import { QnamakerService } from '../../services/qnamaker.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'lib-messaget-item',
  templateUrl: './messaget-item.component.html',
  styleUrls: ['./messaget-item.component.scss']
})
export class MessagetItemComponent implements OnInit {

  @Input() messageItem?: MessageItem;

  constructor(private qnaMakerService: QnamakerService, private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.askQuestion();
  }

  async askQuestion() {
    if(this.messageItem && !this.messageItem?.received && this.messageItem.sent) {
      const received = await this.qnaMakerService.askQuestion(this.messageItem.sent);
      if(received){
        this.messageItem.received = received;
        this.scrollService.gethandler().next();
      }
    }
  }
}
