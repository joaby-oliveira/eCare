import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() content!: string;
  @Input() link!: string;
  @Input() type!: string;
  header: boolean = false;
  auth: boolean = false;
  cta: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.header = this.type == 'header';
    this.auth = this.type == 'auth';
    this.cta = this.type == 'cta';
  }
}
