import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoursLocationComponent } from './components/pages/hours-location/hours-location.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PickupOrderComponent } from './components/pages/pickup-order/pickup-order.component';
import { ReservationsComponent } from './components/pages/reservations/reservations.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavBarComponent } from './components/partials/nav-bar/nav-bar.component';
import { OrderNavBarComponent } from './components/partials/order-nav-bar/order-nav-bar.component';
import { OrderOnlineComponent } from './components/pages/order-online/order-online.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';

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
    OrderOnlineComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
