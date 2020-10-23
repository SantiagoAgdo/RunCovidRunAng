import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {RouteEnum} from './utils/Enums/route-enum';


import {HistoryOneComponent} from './VideoGame/history-one/history-one.component';
import {LoginComponent} from './VideoGame/login/login.component';
import {ListUsersComponent} from './Web/list-users/list-users.component';
import {HistoryTwoComponent} from './VideoGame/history-one/history-two.component';
import {DescriptionComponent} from './Web/description/description.component';
import {NavbarComponent} from './Web/navbar/navbar.component';
import {FooterComponent} from './Web/footer/footer.component';
import {RegistryComponent} from './VideoGame/registry/registry.component'
import {ControlesComponent} from './Web/controles/controles.component';
import {ContacComponent} from './Web/contac/contac.component';
import {AboutGameComponent} from './Web/about-game/about-game.component';
import {AboutUsComponent} from './Web/about-us/about-us.component';

const routes: Routes = [
  {path: RouteEnum.HISTORYONE, component: HistoryOneComponent},
  {path: RouteEnum.HISTORYTWO, component: HistoryTwoComponent},
  {path: RouteEnum.LISTAUSERS, component: ListUsersComponent},
  {path: RouteEnum.DESCRIPTION, component: DescriptionComponent},
  {path: RouteEnum.NAVBAR, component: NavbarComponent},
  {path: RouteEnum.FOOTER, component: FooterComponent},
  {path: RouteEnum.REGISTRY, component: RegistryComponent},
  {path: RouteEnum.CONTROLES, component: ControlesComponent},
  {path: RouteEnum.CONTAC, component: ContacComponent},
  {path: RouteEnum.ABOUTGAME, component: AboutGameComponent},
  {path: RouteEnum.ABOUTUS, component: AboutUsComponent},
  {path: RouteEnum.LOGIN, component: LoginComponent},
  {path: '', redirectTo: RouteEnum.LOGIN, pathMatch: 'full'},
  {path: '**', redirectTo: RouteEnum.LOGIN, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
