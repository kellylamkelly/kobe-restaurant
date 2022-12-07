import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HoursLocationComponent } from './hours-location/hours-location.component';
import { OrderOnlineComponent } from './order-online/order-online.component';
import { ReservationsComponent } from './reservations/reservations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'location', component: HoursLocationComponent },
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  { path: 'order-online', component: OrderOnlineComponent },
  { path: 'order', loadChildren: () => import('./pickup-order/pickup-order.module').then(m => m.PickupOrderModule) }
  // { path: 'reservations', component: ReservationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
