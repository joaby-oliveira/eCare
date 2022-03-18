import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  name: string = '';
  number: string = '';
  text: string = '';

  constructor() {}

  ngOnInit(): void {}

  onContact() {
    if (this.name === '' || this.number === '' || this.text === '') {
      alert('Preencha todos os dados');
      return;
    }
  }
}
