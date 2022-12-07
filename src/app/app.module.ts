import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoursLocationComponent } from './hours-location/hours-location.component';
import { HomeComponent } from './home/home.component';
import { PickupOrderComponent } from './pickup-order/pickup-order.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './partials/nav-bar/nav-bar.component';
import { OrderNavBarComponent } from './partials/order-nav-bar/order-nav-bar.component';
import { OrderOnlineComponent } from './order-online/order-online.component';

@NgModule({
  declarations: [
    AppComponent,
    HoursLocationComponent,
    HomeComponent,
    PickupOrderComponent,
    ReservationsComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    OrderNavBarComponent,
    OrderOnlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
