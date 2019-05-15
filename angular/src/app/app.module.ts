import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SDKBrowserModule } from './backend-sdk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SDKBrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
