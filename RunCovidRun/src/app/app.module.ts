import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HistoryOneComponent } from './history-one/history-one.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryTwoComponent } from './history-one/history-two.component';
import { DescriptionComponent } from './description/description.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegistryComponent } from './registry/registry.component';
import { ControlesComponent } from './controles/controles.component';
import { ContacComponent } from './contac/contac.component';
import { AboutGameComponent } from './about-game/about-game.component';
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryOneComponent,
    LoginComponent,
    ListUsersComponent,
    HistoryTwoComponent,
    DescriptionComponent,
    NavbarComponent,
    FooterComponent,
    RegistryComponent,
    ControlesComponent,
    ContacComponent,
    AboutGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
