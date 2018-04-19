import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridsterModule } from 'angular-gridster2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
