import { UserApi, MessageApi } from 'src/app/backend-sdk';
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {

  loggedInUserId;
  loggedInUserObjAsync;

  messagesObj;

  innerHeight = 0;
  bodyMargins = 10;
  headerHolderHeight = 0;
  footerHolderHeight = 0;

  disableScrollDown = false;
  @ViewChild('autoScrollToBottom') autoScrollToBottom;

  constructor(private userApi: UserApi, private messageApi: MessageApi, private router: Router) {
  }

  ngOnInit() {
    this.onResize({});
    let isAuthenticated = this.userApi.isAuthenticated();
    if(!isAuthenticated) this.router.navigate(['login']);
    this.loggedInUserId = this.userApi.getCurrentId();
    this.userApi.getCurrent().subscribe(userInfo => this.loggedInUserObjAsync = userInfo);
    setInterval(this.getMessages.bind(this), 1000); // TODO: cancel Interval
    this.getMessages();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
  }
  
  receivedHeaderHeightHandler(height) {
    this.headerHolderHeight = height;
  }

  receivedFooterHeightHandler(height) {
    this.footerHolderHeight = height;
  }

  computeRemainingHeight() {
    return this.innerHeight - this.headerHolderHeight - this.footerHolderHeight - this.bodyMargins;
  }

  onScroll() {
    let elem = this.autoScrollToBottom.nativeElement;
    let atBottom = elem.scrollHeight - elem.scrollTop === elem.clientHeight;
    this.disableScrollDown = !atBottom;
  }

  scrollToBottom() {
  if (this.disableScrollDown) return;
    try {
      let elem = this.autoScrollToBottom.nativeElement;
      elem.scrollTop = elem.scrollHeight;
    } catch(err) { }
  }

  logOut() {
    this.userApi.logout();
    this.ngOnInit();
  }

  getMessages() {
    this.messageApi.find().subscribe(messages => this.messagesObj = messages);
    this.scrollToBottom();
  }

  isMsgFromMe(messageObj) {
    return messageObj.senderId === this.loggedInUserId;
  }

  newMsgEventHandler(msgContent) {
    this.messageApi.create({
      "content": msgContent,
      "senderId": this.loggedInUserId,
      "senderName": this.loggedInUserObjAsync.username,
      "sentOn": new Date().toISOString(),
      "id": null
    }).subscribe();
  }

}
