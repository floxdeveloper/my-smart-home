import { OpenhabRestService } from './service/openhab-rest.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GridsterModule } from 'angular-gridster2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GrundrissGridComponent } from './grundriss-grid/grundriss-grid.component';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    GrundrissGridComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    OpenhabRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
