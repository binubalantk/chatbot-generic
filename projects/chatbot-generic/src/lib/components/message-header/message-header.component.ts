import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.scss']
})
export class MessageHeaderComponent implements OnInit {

  @Output() onClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onCloseClick() {
    this.onClose.emit();
  }

}
