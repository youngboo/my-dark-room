import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RoomComponent} from "./room.component";
import {DustyComponent} from "./dusty.component";
import {AppRoutingModule} from "./app-routing.module";
import {VillageComponent} from "./component/village/village.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AllDataService} from "../service/all-data-service";
import {CoolDownButtonComponent} from "./component/cool-down-button/cool-down-button.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    DustyComponent,
    VillageComponent,
    CoolDownButtonComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AllDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
