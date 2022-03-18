import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { HeroComponent } from './pages/sections/hero/hero.component';
import { TitleComponent } from './components/title/title.component';
import { AboutComponent } from './pages/sections/about/about.component';
import { AddressComponent } from './components/address/address.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    ButtonComponent,
    HeroComponent,
    TitleComponent,
    AboutComponent,
    AddressComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FormsModule, NgxMaskModule.forRoot(maskConfig)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
