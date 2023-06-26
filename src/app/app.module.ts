import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navBar/nav-bar/nav-bar.component';
import { ChattingComponent } from './views/chatting/chatting/chatting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ChattingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
