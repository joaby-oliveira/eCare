import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  name: string = '';
  email: string = '';
  text: string = '';

  constructor() {}

  ngOnInit(): void {}

  onContact() {
    if (this.name !== '' && this.email !== '' && this.text !== '') {
      window.location.href = `
        https://api.whatsapp.com/send?phone=5514999029409&text=Olá, me chamo ${this.name}. Email: ${this.email}
        Mensagem: ${this.text}
      `;
    } else {
      alert('Preencha todos os dados');
      return;
    }
  }
}
