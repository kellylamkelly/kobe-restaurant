import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HoursLocationComponent } from './hours-location/hours-location.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { TeppanyakiMenuComponent } from './teppanyaki-menu/teppanyaki-menu.component';
import { SushiMenuComponent } from './sushi-menu/sushi-menu.component';
import { DessertMenuComponent } from './dessert-menu/dessert-menu.component';
import { BevMenuComponent } from './bev-menu/bev-menu.component';
import { OrderOnlineComponent } from './order-online/order-online.component';
import { ReservationsComponent } from './reservations/reservations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'location', component: HoursLocationComponent },
  { path: 'menu', component: AppMenuComponent },
  { path: 'menu/appetizers', component: AppMenuComponent},
  { path: 'menu/teppanyaki', component: TeppanyakiMenuComponent},
  { path: 'menu/sushi', component: SushiMenuComponent},
  { path: 'menu/dessert', component: DessertMenuComponent},
  { path: 'menu/beverages', component: BevMenuComponent},
  { path: 'order', component: OrderOnlineComponent},
  { path: 'reservations', component: ReservationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
