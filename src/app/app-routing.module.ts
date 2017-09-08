import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {RoomComponent} from "./room.component";
import {VillageComponent} from "./village.component";
import {DustyComponent} from "./dusty.component";

const routes: Routes = [
  { path: '',         component:AppComponent },
  { path: 'room',     component: RoomComponent },
  { path: 'village',  component: VillageComponent },
  { path: 'dusty',    component: DustyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
