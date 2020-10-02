import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouteEnum } from './utils/Enums/route-enum';


import { HomeComponent } from "../app/home/home.component";
import { HistoryOneComponent } from "../app/history-one/history-one.component";
import { LoginComponent } from "../app/login/login.component";
import { ListUsersComponent  } from "../app/list-users/list-users.component";
import {HistoryTwoComponent} from './history-one/history-two.component';

const routes: Routes = [
    { path: RouteEnum.HOME, component: HomeComponent },
    { path: RouteEnum.HISTORYONE, component: HistoryOneComponent },
    { path: RouteEnum.HISTORYTWO, component: HistoryTwoComponent },
    { path: RouteEnum.LISTAUSERS, component: ListUsersComponent },
    { path: RouteEnum.LOGIN, component: LoginComponent },
    { path: '', redirectTo: RouteEnum.LOGIN, pathMatch: 'full' },
    { path: '**', redirectTo: RouteEnum.LOGIN, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
