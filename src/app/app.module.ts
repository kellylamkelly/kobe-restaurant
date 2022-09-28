import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoursLocationComponent } from './hours-location/hours-location.component';
import { HomeComponent } from './home/home.component';
import { OrderOnlineComponent } from './order-online/order-online.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { MenuComponent } from './menu/menu.component';
// import { AppetizersComponent } from './menu/appetizers/appetizers.component';
// import { TeppanyakiComponent } from './menu/teppanyaki/teppanyaki.component';
// import { SushiComponent } from './menu/sushi/sushi.component';
// import { DessertComponent } from './menu/dessert/dessert.component';
// import { BeveragesComponent } from './menu/beverages/beverages.component';

@NgModule({
  declarations: [
    AppComponent,
    HoursLocationComponent,
    HomeComponent,
    OrderOnlineComponent,
    ReservationsComponent,
    MenuComponent
    // AppetizersComponent,
    // TeppanyakiComponent,
    // SushiComponent,
    // DessertComponent,
    // BeveragesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
