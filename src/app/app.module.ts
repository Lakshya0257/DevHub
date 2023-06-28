import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navBar/nav-bar/nav-bar.component';
import { ChattingComponent } from './views/chatting/chatting/chatting.component';
import { ContactComponent } from './components/chatting/contact/contact.component';
import { IncomingChatComponent } from './components/chatting/incoming-chat/incoming-chat.component';
import { OutgoingChatComponent } from './components/chatting/outgoing-chat/outgoing-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ChattingComponent,
    ContactComponent,
    IncomingChatComponent,
    OutgoingChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
