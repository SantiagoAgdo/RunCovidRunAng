import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Web/home/home.component';
import { HistoryOneComponent } from './VideoGame/history-one/history-one.component';
import { LoginComponent } from './VideoGame/login/login.component';
import { ListUsersComponent } from './Web/list-users/list-users.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryTwoComponent } from './VideoGame/history-one/history-two.component';
import { DescriptionComponent } from './Web/description/description.component';
import { NavbarComponent } from './Web/navbar/navbar.component';
import { FooterComponent } from './Web/footer/footer.component';
import { RegistryComponent } from './VideoGame/registry/registry.component';
import { ControlesComponent } from './Web/controles/controles.component';
import { ContacComponent } from './Web/contac/contac.component';
import { AboutGameComponent } from './Web/about-game/about-game.component';
import { AboutUsComponent } from './Web/about-us/about-us.component';
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
    AboutGameComponent,
    AboutUsComponent
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
