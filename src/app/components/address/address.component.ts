import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  public mobile: any;

  constructor() {}

  ngOnInit(): void {
    this.mobile = window.innerWidth <= 760;
  }

  @HostListener('window: resize', ['$event'])
  onWindowResize() {
    this.mobile = window.innerWidth <= 760;
  }
}
