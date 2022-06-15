import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-message-box-launcher',
  templateUrl: './message-box-launcher.component.html',
  styleUrls: ['./message-box-launcher.component.scss']
})
export class MessageBoxLauncherComponent implements OnInit {

  @Output() launchMessageBox = new EventEmitter();
  @Input() showUnreadBadge = true;

  constructor() { }

  ngOnInit(): void {
  }

  launch() {
    this.launchMessageBox.emit(true);
  }

}
