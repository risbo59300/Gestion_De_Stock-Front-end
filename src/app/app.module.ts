import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
