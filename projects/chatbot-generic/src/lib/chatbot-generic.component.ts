import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'lib-chatbot-generic',
  template: `
    <div [ngClass]="'chat-boat-overlay'">
      <lib-message-box (closeMessageBox)="toggleMessageBox($event)" *ngIf="openMessageBox"></lib-message-box>
      <lib-message-box-launcher [showUnreadBadge]="showUnreadBadge" (launchMessageBox)="toggleMessageBox($event)" *ngIf="!openMessageBox"></lib-message-box-launcher>
    </div>
  `,
  styles: [
    '.chat-boat-overlay { position: fixed; right: 10px; bottom: 10px; z-index: 9999;}'
  ]
})
export class ChatbotGenericComponent implements OnInit {

  @Input() userName: string = 'user';

  openMessageBox: boolean = false;
  showUnreadBadge: boolean = false;
  text:string = 'No message';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.setUser(this.userName);
  }

  onMessage(message: string){ 
  }

  toggleMessageBox(isOpen: boolean) {
    this.openMessageBox = isOpen;
  }

}
