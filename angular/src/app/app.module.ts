import { AppRoutingModule } from './app-routing.module';
import { SDKBrowserModule } from './backend-sdk';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routingComponents } from './app-routing.module';
import { commonUiComponents } from './common-ui';
import { MsgComposeComponent } from './common-ui/msg-compose/msg-compose.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    commonUiComponents,
    MsgComposeComponent
  ],
  imports: [
    AppRoutingModule,
    SDKBrowserModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
