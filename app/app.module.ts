import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';
import { RadioComponent } from './radio/radio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeComponent } from './time/time.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    PasswordComponent,
    RadioComponent,
    TimeComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
