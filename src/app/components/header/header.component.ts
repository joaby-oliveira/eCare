import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  openMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.openMenu = !this.openMenu;
    console.log(this.openMenu);
  }

  onNavigate() {
    this.openMenu = false;
  }
}
