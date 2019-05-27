import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-msg-bubble',
  templateUrl: './msg-bubble.component.html',
  styleUrls: ['./msg-bubble.component.scss']
})
export class MsgBubbleComponent implements OnInit {

  @Input() messageObj;
  @Input() isMsgFromMe;

  constructor() { }

  ngOnInit() {
  }

}
