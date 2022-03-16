import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() link!: string;
  @Input() type!: string;
  header: boolean = false;
  auth: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.header = this.type == 'header';
    this.auth = this.type == 'auth';
  }
}
