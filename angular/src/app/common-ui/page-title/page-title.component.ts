import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Output() headerHeightReporter = new EventEmitter();

  @ViewChild('headerHolder') headerHolder;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let elem = this.headerHolder.nativeElement;
    this.headerHeightReporter.emit(elem.offsetHeight);
  }

}
