import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoursLocationComponent } from './hours-location/hours-location.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { TeppanyakiMenuComponent } from './teppanyaki-menu/teppanyaki-menu.component';
import { SushiMenuComponent } from './sushi-menu/sushi-menu.component';
import { DessertMenuComponent } from './dessert-menu/dessert-menu.component';
import { BevMenuComponent } from './bev-menu/bev-menu.component';
import { HomeComponent } from './home/home.component';
import { OrderOnlineComponent } from './order-online/order-online.component';
import { ReservationsComponent } from './reservations/reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    HoursLocationComponent,
    AppMenuComponent,
    TeppanyakiMenuComponent,
    SushiMenuComponent,
    DessertMenuComponent,
    BevMenuComponent,
    HomeComponent,
    OrderOnlineComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
