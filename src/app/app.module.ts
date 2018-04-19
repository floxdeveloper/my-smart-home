import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridsterModule } from 'angular-gridster2';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
=======
import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
>>>>>>> 9852ef197375f894510266ca992d668b2d1f691e


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MainComponent,
    NavbarComponent
=======
    MainComponent
>>>>>>> 9852ef197375f894510266ca992d668b2d1f691e
  ],
  imports: [
    BrowserModule,
    GridsterModule,
<<<<<<< HEAD
    NgbModule.forRoot()
=======
    MatToolbarModule
>>>>>>> 9852ef197375f894510266ca992d668b2d1f691e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
