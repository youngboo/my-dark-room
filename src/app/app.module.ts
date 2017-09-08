import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RoomComponent} from "./room.component";
import {DustyComponent} from "./dusty.component";
import {AppRoutingModule} from "./app-routing.module";
import {VillageComponent} from "./village.component";

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    DustyComponent,
    VillageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
