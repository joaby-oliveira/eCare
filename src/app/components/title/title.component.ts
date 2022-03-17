import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  @Input() content: string = '';
  @Input() type: string = '';
  @Input() align: string = '';
  h1: boolean = false;
  h2: boolean = false;
  center: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.h1 = this.type === 'h1';
    this.h2 = this.type === 'h2' || !this.type;
    this.center = this.type === 'center' || !this.align;
  }
}
