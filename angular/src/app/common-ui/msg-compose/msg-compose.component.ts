import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-msg-compose',
  templateUrl: './msg-compose.component.html',
  styleUrls: ['./msg-compose.component.scss']
})
export class MsgComposeComponent implements OnInit {

  newMessage;

  @Output() newMsgEvent = new EventEmitter();

  @Output() elemHeightReporter = new EventEmitter();

  @ViewChild('computeHeight') computeHeight;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let elem = this.computeHeight.nativeElement;
    this.elemHeightReporter.emit(elem.offsetHeight);
  }

  sendMessage() {
    if(!this.newMessage) return;
    this.newMsgEvent.emit(this.newMessage);
    this.newMessage = '';
  }
}
