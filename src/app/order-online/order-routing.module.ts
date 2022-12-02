import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderOnlineComponent } from './order-online.component';
import { CartComponent } from './cart/cart.component';
import { OrderAppetizersComponent } from './order-appetizers/order-appetizers.component';
import { OrderTeppanyakiComponent } from './order-teppanyaki/order-teppanyaki.component';
import { OrderSushiComponent } from './order-sushi/order-sushi.component';

const routes: Routes = [
  {
    path: '', component: OrderOnlineComponent, children: [
      { path: 'appetizers', component: OrderAppetizersComponent },
      { path: 'teppanyaki', component: OrderTeppanyakiComponent },
      { path: 'sushi', component: OrderSushiComponent },
      { path: 'cart', component: CartComponent},
      { path: '', redirectTo: 'appetizers', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
