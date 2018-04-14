import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {RoomComponent} from "./room.component";
import {VillageComponent} from "./component/village/village.component";
import {DustyComponent} from "./dusty.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo:'room',pathMatch:'full'},
  { path: 'room',     component: RoomComponent },
  { path: 'village',  component: VillageComponent },
  { path: 'dusty',    component: DustyComponent },
  { path: 'dashboard',    component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
