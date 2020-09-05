import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouteEnum } from './utils/Enums/route-enum';


import { HomeComponent } from "../app/home/home.component";
import { HistoryOneComponent } from "../app/history-one/history-one.component";

const routes: Routes = [
    { path: RouteEnum.HOME, component: HomeComponent },
    { path: RouteEnum.HISTORYONE, component: HistoryOneComponent },
    { path: '', redirectTo: RouteEnum.HOME, pathMatch: 'full' },
    { path: '**', redirectTo: RouteEnum.HOME, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
